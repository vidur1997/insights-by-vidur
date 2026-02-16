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

    // Code examples
    var pythonCode = [
      '# Market Sizing Calculator',
      '# Calculate Total Addressable Market (TAM)',
      '',
      'def calculate_tam(population, adoption_rate, price_per_unit):',
      '    """Calculate Total Addressable Market"""',
      '    tam = population * adoption_rate * price_per_unit',
      '    return tam',
      '',
      'def format_currency(value):',
      '    """Format large numbers with appropriate suffix"""',
      '    if value >= 1e9:',
      '        return f"${value/1e9:.2f}B"',
      '    elif value >= 1e6:',
      '        return f"${value/1e6:.2f}M"',
      '    else:',
      '        return f"${value:,.0f}"',
      '',
      '# Example: UK Modular Kitchen Market',
      'uk_households = 28_000_000',
      'adoption_rate = 0.15  # 15% target segment',
      'avg_order_value = 2500  # GBP',
      '',
      'tam = calculate_tam(uk_households, adoption_rate, avg_order_value)',
      'print(f"UK Modular Kitchen TAM: {format_currency(tam)}")',
      '',
      '# Segment Analysis',
      'segments = {',
      '    "Premium": {"rate": 0.05, "aov": 5000},',
      '    "Mid-Market": {"rate": 0.08, "aov": 2500},',
      '    "Budget": {"rate": 0.12, "aov": 1200}',
      '}',
      '',
      'print("Segment Breakdown:")',
      'for segment, data in segments.items():',
      '    seg_tam = calculate_tam(uk_households, data["rate"], data["aov"])',
      '    print(f"  {segment}: {format_currency(seg_tam)}")'
    ].join('\n');

    var pythonOutput = [
      'UK Modular Kitchen TAM: $10.50B',
      '',
      'Segment Breakdown:',
      '  Premium: $7.00B',
      '  Mid-Market: $5.60B',
      '  Budget: $4.03B'
    ].join('\n');

    var sqlCode = [
      '-- Sales Performance Analysis',
      '-- Identifying top performers and growth trends',
      '',
      '-- Top 5 Products by Revenue',
      'SELECT ',
      '    product_name,',
      '    SUM(quantity * unit_price) AS total_revenue,',
      '    COUNT(DISTINCT order_id) AS num_orders,',
      '    ROUND(AVG(quantity), 2) AS avg_qty_per_order',
      'FROM orders o',
      'JOIN order_items oi ON o.id = oi.order_id',
      'JOIN products p ON oi.product_id = p.id',
      'WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 90 DAY)',
      'GROUP BY product_name',
      'ORDER BY total_revenue DESC',
      'LIMIT 5;',
      '',
      '-- Month-over-Month Growth Rate',
      'SELECT ',
      '    DATE_FORMAT(order_date, "%Y-%m") AS month,',
      '    SUM(total_amount) AS revenue,',
      '    LAG(SUM(total_amount)) OVER (ORDER BY month) AS prev_month,',
      '    ROUND((SUM(total_amount) - LAG(SUM(total_amount)) OVER (ORDER BY month))',
      '        / LAG(SUM(total_amount)) OVER (ORDER BY month) * 100, 2) AS growth_pct',
      'FROM orders',
      'GROUP BY month',
      'ORDER BY month DESC',
      'LIMIT 6;'
    ].join('\n');

    var sqlOutput = [
      '+------------------+---------------+------------+------------------+',
      '| product_name     | total_revenue | num_orders | avg_qty_per_order|',
      '+------------------+---------------+------------+------------------+',
      '| Premium Cabinet  |     $125,400  |        142 |             2.35 |',
      '| Modular Drawer   |      $98,200  |        215 |             3.10 |',
      '| Kitchen Counter  |      $87,650  |         98 |             1.50 |',
      '| Storage Unit     |      $72,300  |        186 |             2.80 |',
      '| Handle Set Pro   |      $45,200  |        320 |             5.20 |',
      '+------------------+---------------+------------+------------------+',
      '',
      '+---------+-----------+-----------+------------+',
      '| month   | revenue   | prev_month| growth_pct |',
      '+---------+-----------+-----------+------------+',
      '| 2026-02 | $245,000  | $228,500  |      7.22% |',
      '| 2026-01 | $228,500  | $195,200  |     17.06% |',
      '| 2025-12 | $195,200  | $210,800  |     -7.40% |',
      '| 2025-11 | $210,800  | $198,400  |      6.25% |',
      '| 2025-10 | $198,400  | $185,600  |      6.90% |',
      '+---------+-----------+-----------+------------+'
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
