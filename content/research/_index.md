---
title: "Research"
layout: "single"
---

<style>
/* Widen research page layout */
.single .post-content,
.single .post,
.single main,
.single article,
.post-content,
article.post {
  max-width: 100% !important;
  width: 100% !important;
}

.single .container,
.container {
  max-width: 1200px !important;
  width: 100% !important;
}

/* Hide reading time */
.reading-time,
.post-info {
  display: none !important;
}

/* Better code block styling */
pre {
  background: rgba(0, 0, 0, 0.3) !important;
  border: 1px solid #333 !important;
  border-radius: 8px !important;
  padding: 15px !important;
  overflow-x: auto !important;
  font-size: 0.85rem !important;
}

/* Section spacing */
h2 {
  margin-top: 50px !important;
  padding-top: 20px !important;
  border-top: 1px solid #333;
}

h3 {
  color: #00ffaa !important;
  margin-top: 30px !important;
}

/* Project cards */
.project-highlight {
  background: rgba(0, 255, 170, 0.08);
  border: 1px solid #333;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}
</style>

## Research & Projects

Selected work demonstrating data analysis, marketing analytics, and strategic thinking.

<a href="/dashboard/" style="color: #00ffaa; font-weight: bold;">→ View my Live Marketing Analytics Dashboard</a>

---

## Marketing Analytics

### Multi-Client Marketing Dashboard

**Project Type:** Portfolio Project | 2026

Built an interactive marketing analytics dashboard demonstrating full-funnel campaign analysis across three client verticals.

**The Challenge:**
Create a portfolio piece that demonstrates real-world marketing analytics capabilities — not just static charts, but a working tool with filters, multiple data views, and actionable insights.

**Solution:**

Built a React-based dashboard with four main sections:

| Tab | Metrics Tracked |
|-----|-----------------|
| **Overview** | Channel mix, performance trends, top campaigns, conversion funnel |
| **Paid Media** | Spend, impressions, clicks, CTR, CPC, ROAS, demographics |
| **SEO** | Organic sessions, keyword rankings, traffic trends, technical scores |
| **Social** | Followers, engagement rate, reach, content performance |

**Key Features:**
- Working filters (channel, date range) that dynamically update all visualisations
- Date range scaling (7/30/90 days) with mathematically adjusted metrics
- Three client datasets (Education, Automotive, Healthcare) with realistic KPIs
- Conversion funnel visualisation with stage-by-stage drop-off rates
- CSV export functionality

**Technical Stack:** React, Recharts, JavaScript, CSS

<a href="/dashboard/" style="color: #00ffaa;">→ View Live Dashboard</a>

---

### Lead Generation Strategy 

**Client Engagement:** Blackmont Consulting | February 2026

Developed a comprehensive digital marketing and lead generation strategy for a bookkeeping firm targeting UK SMEs.

**Scope of Work:**

| Analysis Area | Deliverable |
|---------------|-------------|
| Market Sizing | TAM/SAM/SOM analysis (£6.8B → £125M addressable) |
| Customer Research | 3 detailed personas with pain points and needs |
| SEO Strategy | Keyword research, 3-pillar approach, technical audit |
| Paid Media Plan | Facebook + Google Ads strategy with targeting and benchmarks |
| Lead Funnel | Full awareness → conversion funnel with KPIs |
| Implementation | 90-day roadmap with budget allocation |

**Key Insights Delivered:**

```
MARKET OPPORTUNITY
TAM (UK Bookkeeping)           £6.8B
SAM (Micro & Small Business)   £2.5B
SOM (2% Capture)               £125M

PAID MEDIA BENCHMARKS
Facebook CPL                   £14-22
Google CPL                     £35-65
Target ROAS                    3-5x
```

**Skills Applied:** Market Sizing, Customer Segmentation, SEO Analysis, Paid Media Strategy, Funnel Design

---

### Market Entry Analysis | Modular Kitchen Hardware

**Client Engagement:** Blackmont Consulting | January 2026

Strategic market analysis for a modular kitchen hardware manufacturer, evaluating the UK market entry.

**Approach:**

1. **Market Sizing** — Bottom-up and top-down models validating £400M+ market opportunity
2. **Competitive Intelligence** — Analysed 4 major players across pricing, distribution, and positioning
3. **Customer Segmentation** — Developed targeting framework based on value potential
4. **Financial Modelling** — Year 1 revenue scenarios with sensitivity analysis

**Deliverables:**

```
Market Opportunity Identified    £1.6B by 2030
Competitive Dimensions Analysed  8
Strategic Recommendations        8
Revenue Scenarios Modelled       3 (Conservative/Base/Aggressive)
```

**Skills Applied:** Market Sizing, Competitive Benchmarking, Financial Modelling, Executive Presentation

---

## Academic Research

### Geographic Concentration in Semiconductor Manufacturing

**MSc Dissertation** | University of Exeter | 2025-2026

**Research Question:**
Why has semiconductor manufacturing become MORE geographically concentrated despite $95B in global diversification subsidies?

**The Paradox:**

Despite massive policy interventions (US CHIPS Act, EU Chips Act), market concentration *increased*:

```
METRIC                              2022        2024        CHANGE
Top 3 Producers Market Share        79.2%       83.7%       +4.5%
Taiwan Advanced Logic (3-7nm)       90%         90%         Dominant
```

**Original Analytical Framework:**

Developed a Dual-Risk Model separating Strategic Risk Index (SRI) from Environmental Vulnerability Index (EVI):

```
RISK TYPE              CONCENTRATION    INSIGHT
Strategic Risk         84.8%            Firms ACCEPT geopolitical exposure
Environmental Risk     39.6%            Firms AVOID infrastructure risk
THE GAP                45.2 pts         Geopolitical risk = acceptable trade-off
```

**10-Year Total Cost of Ownership Analysis:**

```
REGION          TOTAL 10-YR COST     VS TAIWAN
Taiwan          $39.5B               Baseline
Europe          $57.9B               +47%
USA             $61.75B              +56%
```

**Key Finding:** One-time capital subsidies cannot overcome perpetual operational disadvantages. CHIPS Act covers <10% of total 10-year cost difference.

**Technical Implementation:**
- **Data Sources:** UN Comtrade, World Bank, proprietary cost models
- **Tools:** Python (pandas, numpy), SQL, Tableau
- **Methods:** Trade flow analysis, regression modelling, scenario planning

---

## Technical Projects

### AI-Enabled Marketing Campaign Generator

**Built with:** Python, OpenAI GPT-4 API, pandas

**Problem:**
Digital marketing campaign planning is manual and time-intensive. Small businesses spend less than 1 hour daily on marketing despite recognising it as a growth priority.

**Solution:**

Built an AI-powered tool that generates complete marketing campaigns:

```
INPUT                    PROCESSING                    OUTPUT
──────                   ──────────                    ──────
Product details    →     Prompt engineering     →      Strategy document
Target audience    →     Platform optimisation  →      Campaign calendar
Budget & duration  →     Quality checks         →      Content suggestions
```

**Features:**
- Multi-platform support (Facebook, Instagram, LinkedIn, Google Ads)
- Automated strategy generation with audience segmentation
- Platform-specific content tailored to best practices
- Built-in readability scoring and sentiment analysis
- Budget allocation model based on engagement data

**Results:**

```
Campaign Setup Time     Hours → Minutes
Platforms Supported     4
Output Quality Score    53+ Flesch Reading Ease
```

**Skills Applied:** Python, API Integration, Prompt Engineering, NLP

---

## Skills & Tools

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 30px 0;">

<div>

**Data & Analytics**

| Skill | Level |
|-------|-------|
| SQL | Advanced |
| Python (Pandas, NumPy) | Advanced |
| Excel | Advanced |
| Power BI / Tableau / Looker | Proficient |
| R / SPSS | Intermediate |

</div>

<div>

**Marketing & Business**

| Skill | Level |
|-------|-------|
| Google/Facebook Ads | Proficient |
| Google Analytics / GA4 | Proficient |
| Market Sizing | Advanced |
| SEO & Keyword Analysis | Intermediate |
| Financial Modelling | Proficient |

</div>

</div>

---

## Get In Touch

Interested in discussing any of these projects?

<a href="mailto:vidursharma1997@gmail.com">vidursharma1997@gmail.com</a> | <a href="https://www.linkedin.com/in/vidursharma1997/" target="_blank">LinkedIn</a> | <a href="/contact/">Contact Form</a>