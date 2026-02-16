---
title: "Research"
layout: "single"
---

## Research and Projects

Selected work demonstrating analytical rigour, strategic thinking, and technical capability.

---

## Academic Research

### Geographic Concentration in Global Semiconductor Manufacturing

**MSc Dissertation** | University of Exeter | 2025-2026

**Research Question:**
Why has semiconductor manufacturing become MORE geographically concentrated despite USD 95B in global diversification subsidies?

---

**The Concentration Paradox**

Despite massive policy interventions (US CHIPS Act, EU Chips Act), market concentration *increased* rather than decreased:

```
METRIC                              2022        2024        CHANGE
------                              ----        ----        ------
Top 3 Producers Market Share        79.2%       83.7%       +4.5%
Taiwan Global Export Share          31%         31%         Stable
Taiwan Advanced Logic (3-7nm)       90%         90%         Dominant
Taiwan Annual Capacity Value        --          $91.6B      --
```

---

**Original Analytical Framework: Dual-Risk Model**

Developed methodology separating Strategic Risk Index (SRI) from Environmental Vulnerability Index (EVI) to explain manufacturer location decisions:

```
RISK TYPE              CONCENTRATION    KEY INSIGHT
---------              -------------    -----------
Strategic Risk         84.8%            Firms ACCEPT geopolitical exposure
                                        for ecosystem access
                                        
Environmental Risk     39.6%            Firms AVOID infrastructure and
                                        natural disaster risk

THE GAP                45.2 pts         Geopolitical risk viewed as
                                        acceptable trade-off for
                                        operational efficiency
```

**Interpretation:** Manufacturers systematically accept geopolitical exposure (Taiwan Strait tensions) because the daily efficiency gains from established ecosystems outweigh the low-probability risk of conflict.

---

**10-Year Total Cost of Ownership Analysis**

Built comprehensive TCO model comparing manufacturing economics across regions:

```
COST CATEGORY          TAIWAN      USA           EUROPE
-------------          ------      ---           ------
Initial Investment     $20.0B      $22.0B        $21.5B
                                   (+$2B)        (+$1.5B)

10-Year Labor          $4.5B       $15.75B       $13.5B
                                   (3.5x)        (3.0x)

Supplier/Coordination  $1.8B       $5.4B         $4.5B
                                   (3.0x)        (2.5x)

Yield Loss (Waste)     $1.2B       $3.6B         $3.0B
                                   (3.0x)        (2.5x)

─────────────────────────────────────────────────────────
TOTAL 10-YEAR COST     $39.5B      $61.75B       $57.9B
COST PREMIUM           Baseline    +56%          +47%
```

---

**Why Diversification Policies Fail**

Identified three structural reasons why USD 95B in subsidies haven't reversed concentration:

**1. Infrastructure vs. Ecosystems**
Subsidies target infrastructure where it's already excellent. They fail to address 30+ years of supplier networks and process knowledge in Taiwan.

**2. Cost Structure Misalignment**
```
CHIPS Act Coverage:     25% of initial capital (~$5.5B)
Capital Share of TCO:   35-40%

Result: Subsidies address <10% of total 10-year cost
```

**3. The Expertise Gap**

```
FACTOR                  TAIWAN          USA/EUROPE
------                  ------          ----------
Labor Cost Multiple     1.0x            3.5x
Supplier Proximity      200+ within     Dispersed
                        1-hour radius   
Manufacturing Yield     98%             90-94%
Yield Cost per 1%       --              $60M additional
Engineering Graduates   8,000/year      Bottlenecked
```

---

**Post-Subsidy Economics**

Even after applying CHIPS Act grants:

```
US Facility 10-Year Cost (Pre-Subsidy):   $61.75B
CHIPS Act Grant (25% of CapEx):           -$5.50B
                                          ────────
US Facility 10-Year Cost (Post-Subsidy):  $56.25B
Taiwan 10-Year Cost:                      $39.50B
                                          ────────
REMAINING GAP:                            $16.75B
```

**Conclusion:** One-time capital subsidies cannot overcome perpetual operational disadvantages.

---

**Strategic Recommendations**

**For Policymakers:**
- Shift from 5-year funding cycles to 15-25 year ecosystem development timelines
- Focus on "technology-appropriate" diversification: mature nodes (28nm+) to new regions while accepting advanced nodes (3nm) will remain concentrated

**For Industry:**
- Implement strategic semiconductor reserves (3-6 month buffers)
- Pursue international production-sharing agreements rather than geographic relocation

---

**Technical Implementation:**

- **Data Sources:** UN Comtrade, World Bank, proprietary cost models
- **Tools:** Python (pandas, numpy), SQL, Tableau
- **Analysis:** Trade flow analysis, regression modelling, scenario planning

**Skills Applied:** Economic Analysis, Financial Modelling, Data Visualisation, Policy Analysis, Strategic Research

---

## Strategic Consulting

### Market Entry Strategy | Blackmont Consulting

**Engagement:** Strategic analysis for market entry in a USD 400M+ sector

**Challenge:**
Client needed to evaluate market opportunity, competitive landscape, and optimal entry strategy for a fragmented B2B market with multiple incumbent players.

**Approach:**

1. **Market Sizing** — Built bottom-up and top-down models to validate market opportunity and identify growth trajectories through 2030

2. **Competitive Intelligence** — Analysed 4 major players across 8 dimensions including pricing, distribution, product range, and market positioning

3. **Customer Segmentation** — Developed targeting framework based on customer value potential and acquisition feasibility

4. **Financial Modelling** — Projected Year 1 revenue scenarios with sensitivity analysis on key assumptions

**Deliverables:**

- Executive presentation to client leadership
- Strategic roadmap with 8 prioritised recommendations
- Go-to-market playbook with phased implementation plan

**Impact:**

```
Market Opportunity Identified    USD 1.6B by 2030
Competitive Dimensions Analysed  8
Strategic Recommendations        8
Revenue Scenarios Modelled       3 (Conservative/Base/Aggressive)
```

**Skills Applied:** Market Sizing, Competitive Benchmarking, Customer Segmentation, Financial Modelling, Executive Communication

---

## Technical Projects

### AI-Enabled Digital Marketing Platform

**Built with:** Python, OpenAI GPT-4 API, pandas, python-docx

**Problem:**
Digital marketing campaign planning is manual, time-intensive, and requires coordination across multiple specialists. Small businesses spend less than 1 hour daily on marketing despite recognising it as a key growth opportunity.

**Solution Architecture:**

```
USER INPUT                    AI PROCESSING                 OUTPUT
    |                              |                           |
    v                              v                           v
+----------+    +----------------------------------+    +-------------+
| Product  |    |  Prompt Engineering Layer        |    | Strategy    |
| Audience |--->|  - Strategy Generation           |--->| Document    |
| Platform |    |  - Platform-Specific Content     |    | (Word)      |
| Budget   |    |  - Creative Ideation             |    +-------------+
| Duration |    |  - Calendar Automation           |    | Campaign    |
+----------+    +----------------------------------+    | Calendar    |
                         |                              | (Excel)     |
                         v                              +-------------+
                +------------------+
                | Quality Checks   |
                | - Readability    |
                | - Sentiment      |
                | - Brand Safety   |
                +------------------+
```

**Key Features:**

- **Multi-Platform Support** — Facebook, Instagram, LinkedIn, Google Ads
- **Automated Strategy Generation** — AI-generated marketing plans with audience segmentation and messaging frameworks
- **Platform-Specific Content** — Headlines, descriptions, and creative concepts tailored to each platform's best practices
- **Quality Assurance** — Built-in readability scoring (Flesch-Kincaid) and sentiment analysis (TextBlob)
- **Budget Allocation Model** — ML-trained weights based on platform engagement data

**Technical Implementation:**

```python
# Budget allocation using trained model
platform_weights = pickle.load('engagement_weights.pkl')
daily_budget = total_budget / duration
platform_allocation = {
    platform: daily_budget * platform_weights[platform]
    for platform in selected_platforms
}
```

**Results:**

```
Campaign Setup Time     Reduced from hours to minutes
Platforms Supported     4 (Facebook, Instagram, LinkedIn, Google)
Output Quality Score    Avg. 53+ Flesch Reading Ease
Sentiment Accuracy      Positive/Neutral tone maintained
```

**Skills Applied:** Python, API Integration, Prompt Engineering, NLP, Machine Learning

---

## Analytical Toolkit

**Technical Proficiency:**

```
SKILL               LEVEL          APPLICATION
-----               -----          -----------
SQL                 Advanced       Complex queries, data pipelines
Python              Advanced       Analysis, automation, ML
Excel               Advanced       Financial modelling, dashboards
Power BI            Proficient     Interactive reporting
Tableau             Proficient     Data visualisation
```

**Strategic Frameworks:**

- Market Sizing (Top-Down and Bottom-Up)
- Competitive Benchmarking
- Customer Segmentation
- Total Cost of Ownership Modelling
- Scenario Planning
- Policy Analysis

---

## Get In Touch

Interested in discussing any of these projects or exploring collaboration opportunities?

<a href="mailto:vidursharma1997@gmail.com">vidursharma1997@gmail.com</a> | <a href="https://www.linkedin.com/in/vidursharma1997/" target="_blank">LinkedIn</a>
