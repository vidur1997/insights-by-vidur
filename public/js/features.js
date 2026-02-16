// Skills Progress Bar Animation
(function() {
  function animateSkills() {
    var skillBars = document.querySelectorAll('.skill-progress');
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var bar = entry.target;
          var width = bar.getAttribute('data-width');
          setTimeout(function() {
            bar.style.width = width + '%';
          }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.5 });

    skillBars.forEach(function(bar) {
      observer.observe(bar);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateSkills);
  } else {
    animateSkills();
  }
})();

// Code Playground
(function() {
  function initPlayground() {
    var playground = document.getElementById('codePlayground');
    if (!playground) return;

    var tabs = playground.querySelectorAll('.tab-btn');
    var editor = playground.querySelector('.code-editor');
    var output = playground.querySelector('.code-output');
    var runBtn = playground.querySelector('.run-btn');

    // Code examples - Semiconductor Analysis
    var pythonCode = [
      '# Semiconductor Supply Chain Concentration Analysis',
      '# Assessing geographic risk in global chip manufacturing',
      '',
      'import pandas as pd',
      '',
      'def calculate_concentration_index(market_shares):',
      '    """Calculate Herfindahl-Hirschman Index (HHI)"""',
      '    hhi = sum([share**2 for share in market_shares])',
      '    return round(hhi, 2)',
      '',
      'def assess_risk_level(hhi):',
      '    """Classify concentration risk"""',
      '    if hhi >= 2500:',
      '        return "HIGH - Highly Concentrated"',
      '    elif hhi >= 1500:',
      '        return "MODERATE - Moderately Concentrated"',
      '    else:',
      '        return "LOW - Competitive Market"',
      '',
      '# Global Semiconductor Manufacturing Market Share (%)',
      'fab_capacity = {',
      '    "Taiwan (TSMC)": 54,',
      '    "South Korea (Samsung)": 18,',
      '    "China": 9,',
      '    "Japan": 6,',
      '    "United States": 6,',
      '    "Europe": 4,',
      '    "Others": 3',
      '}',
      '',
      '# Calculate concentration',
      'shares = list(fab_capacity.values())',
      'hhi = calculate_concentration_index(shares)',
      'risk = assess_risk_level(hhi)',
      '',
      'print("=== Semiconductor Fab Concentration Analysis ===")',
      'print(f"\\nHerfindahl-Hirschman Index (HHI): {hhi}")',
      'print(f"Risk Assessment: {risk}")',
      'print(f"\\nTop 2 regions control: {shares[0] + shares[1]}% of capacity")',
      'print("\\nStrategic Implication: Single point of failure risk")'
    ].join('\n');

    var pythonOutput = [
      '=== Semiconductor Fab Concentration Analysis ===',
      '',
      'Herfindahl-Hirschman Index (HHI): 3418',
      'Risk Assessment: HIGH - Highly Concentrated',
      '',
      'Top 2 regions control: 72% of capacity',
      '',
      'Strategic Implication: Single point of failure risk',
      '',
      '------------------------------------------------',
      'Analysis Note: HHI > 2500 indicates a highly',
      'concentrated market. Taiwan alone holds 54% of',
      'advanced node (<7nm) manufacturing capacity.',
      'Geopolitical disruption could impact $500B+ in',
      'annual semiconductor trade flows.'
    ].join('\n');

    var sqlCode = [
      '-- Semiconductor Trade Flow Analysis',
      '-- Identifying supply chain dependencies by region',
      '',
      '-- Top Import Dependencies by Country',
      'SELECT ',
      '    importing_country,',
      '    exporting_country,',
      '    SUM(trade_value_usd) AS total_imports,',
      '    ROUND(SUM(trade_value_usd) * 100.0 / ',
      '        SUM(SUM(trade_value_usd)) OVER (PARTITION BY importing_country), 2',
      '    ) AS dependency_pct',
      'FROM semiconductor_trade',
      'WHERE year = 2024',
      '    AND hs_code LIKE "8542%"  -- Integrated circuits',
      'GROUP BY importing_country, exporting_country',
      'HAVING dependency_pct > 10',
      'ORDER BY importing_country, total_imports DESC;',
      '',
      '-- Year-over-Year Capacity Shift Analysis',
      'SELECT ',
      '    region,',
      '    year,',
      '    fab_capacity_wafers_k,',
      '    LAG(fab_capacity_wafers_k) OVER ',
      '        (PARTITION BY region ORDER BY year) AS prev_year,',
      '    ROUND((fab_capacity_wafers_k - LAG(fab_capacity_wafers_k) ',
      '        OVER (PARTITION BY region ORDER BY year)) * 100.0 / ',
      '        LAG(fab_capacity_wafers_k) OVER ',
      '        (PARTITION BY region ORDER BY year), 2) AS yoy_growth',
      'FROM global_fab_capacity',
      'WHERE year BETWEEN 2020 AND 2024',
      'ORDER BY region, year;'
    ].join('\n');

    var sqlOutput = [
      'Top Import Dependencies:',
      '',
      'importing_country | exporting_country | total_imports | dependency_pct',
      '------------------|-------------------|---------------|---------------',
      'United States     | Taiwan            | $42.8B        | 38.2%',
      'United States     | South Korea       | $18.2B        | 16.3%',
      'United States     | China             | $15.1B        | 13.5%',
      'Germany           | Taiwan            | $12.4B        | 31.8%',
      'Germany           | China             | $8.9B         | 22.8%',
      'Japan             | Taiwan            | $11.2B        | 42.1%',
      '',
      '',
      'YoY Capacity Growth:',
      '',
      'region        | year | fab_capacity_k | prev_year | yoy_growth',
      '--------------|------|----------------|-----------|----------',
      'Taiwan        | 2024 | 4,850          | 4,620     | 4.98%',
      'South Korea   | 2024 | 2,120          | 2,015     | 5.21%',
      'China         | 2024 | 1,680          | 1,420     | 18.31%',
      'United States | 2024 | 985            | 920       | 7.07%',
      'Europe        | 2024 | 540            | 510       | 5.88%',
      '',
      '',
      'Key Insight: China shows 18.3% YoY capacity growth',
      'despite export controls, indicating aggressive domestic', 
      'investment in mature nodes.'
    ].join('\n');
    var examples = {
      python: { code: pythonCode, output: pythonOutput },
      sql: { code: sqlCode, output: sqlOutput }
    };

    var currentLang = 'python';
    editor.value = examples[currentLang].code;

    // Tab switching
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentLang = tab.getAttribute('data-lang');
        editor.value = examples[currentLang].code;
        output.textContent = '// Click "Run" to execute';
      });
    });

    // Run button
    runBtn.addEventListener('click', function() {
      output.textContent = '> Running...';
      setTimeout(function() {
        output.textContent = examples[currentLang].output;
      }, 800);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPlayground);
  } else {
    initPlayground();
  }
})();
