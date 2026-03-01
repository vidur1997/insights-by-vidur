// Dashboard Data - Synthetic Marketing Data for Portfolio Demonstration
// This data is fictional and created to demonstrate dashboard design capabilities

const DASHBOARD_DATA = {
  
  // ============ APEX UNIVERSITY ============
  apex_university: {
    id: 'apex_university',
    name: 'Apex University',
    industry: 'Education',
    logo: '🎓',
    description: 'Private university with 15,000+ students across 5 campuses',
    
    // Overall KPIs (aggregated across all channels)
    overall: {
      totalSpend: 45200,
      totalRevenue: 217000,
      overallROAS: 4.8,
      totalLeads: 1247,
      totalImpressions: 4850000,
      totalClicks: 145500,
      blendedCPC: 0.31,
      blendedCTR: 3.0,
      blendedConvRate: 0.86,
      totalConversions: 748,
      // Trends vs last period
      spendTrend: 12,
      revenueTrend: 18,
      roasTrend: 8,
      leadsTrend: 15,
      impressionsTrend: 22,
      clicksTrend: 19
    },

    // ===== PAID MEDIA DATA =====
    paidMedia: {
      kpis: {
        spend: 39700,
        impressions: 3200000,
        clicks: 96000,
        ctr: 3.0,
        cpc: 0.41,
        conversions: 624,
        convRate: 0.65,
        revenue: 187200,
        roas: 4.72
      },
      
      // By Channel
      channels: [
        { 
          name: 'Facebook Ads', 
          spend: 18500, 
          impressions: 1420000, 
          clicks: 45440, 
          ctr: 3.2,
          cpc: 0.41,
          leads: 520, 
          conversions: 312, 
          revenue: 89400,
          roas: 4.83
        },
        { 
          name: 'Google Ads', 
          spend: 15200, 
          impressions: 980000, 
          clicks: 34300, 
          ctr: 3.5,
          cpc: 0.44,
          leads: 445, 
          conversions: 267, 
          revenue: 72100,
          roas: 4.74
        },
        { 
          name: 'YouTube Ads', 
          spend: 6000, 
          impressions: 800000, 
          clicks: 16260, 
          ctr: 2.0,
          cpc: 0.37,
          leads: 100, 
          conversions: 45, 
          revenue: 25700,
          roas: 4.28
        }
      ],

      // By Campaign Objective
      objectives: [
        { name: 'Lead Generation', spend: 22400, conversions: 445, percentage: 56 },
        { name: 'Awareness', spend: 9800, conversions: 89, percentage: 25 },
        { name: 'Traffic', spend: 4500, conversions: 56, percentage: 11 },
        { name: 'Retargeting', spend: 3000, conversions: 34, percentage: 8 }
      ],

      // Campaign Table
      campaigns: [
        { name: 'Spring Enrollment 2026', objective: 'Lead Gen', channel: 'Facebook Ads', status: 'Active', spend: 8500, impressions: 425000, clicks: 14875, leads: 245, conversions: 147, roas: 5.2, cpc: 0.57, ctr: 3.5 },
        { name: 'MBA Program Launch', objective: 'Lead Gen', channel: 'Google Ads', status: 'Active', spend: 7200, impressions: 380000, clicks: 11400, leads: 198, conversions: 119, roas: 4.9, cpc: 0.63, ctr: 3.0 },
        { name: 'Campus Tour Video', objective: 'Awareness', channel: 'YouTube Ads', status: 'Active', spend: 4500, impressions: 620000, clicks: 12400, leads: 78, conversions: 35, roas: 3.8, cpc: 0.36, ctr: 2.0 },
        { name: 'Scholarship Campaign', objective: 'Lead Gen', channel: 'Facebook Ads', status: 'Active', spend: 5200, impressions: 312000, clicks: 10920, leads: 156, conversions: 94, roas: 5.5, cpc: 0.48, ctr: 3.5 },
        { name: 'Open Day Awareness', objective: 'Awareness', channel: 'Facebook Ads', status: 'Paused', spend: 3200, impressions: 480000, clicks: 9600, leads: 45, conversions: 18, roas: 2.8, cpc: 0.33, ctr: 2.0 },
        { name: 'Course Finder Search', objective: 'Traffic', channel: 'Google Ads', status: 'Active', spend: 4500, impressions: 280000, clicks: 11200, leads: 124, conversions: 62, roas: 4.2, cpc: 0.40, ctr: 4.0 },
        { name: 'Alumni Retargeting', objective: 'Retargeting', channel: 'Google Ads', status: 'Active', spend: 3000, impressions: 180000, clicks: 7200, leads: 77, conversions: 46, roas: 6.2, cpc: 0.42, ctr: 4.0 },
        { name: 'Student Testimonials', objective: 'Awareness', channel: 'YouTube Ads', status: 'Active', spend: 1500, impressions: 180000, clicks: 3860, leads: 22, conversions: 10, roas: 3.2, cpc: 0.39, ctr: 2.1 }
      ],

      // Daily Performance (Last 30 days sample)
      dailyData: [
        { date: 'Feb 1', spend: 1320, impressions: 105000, clicks: 3150, conversions: 21, revenue: 6300 },
        { date: 'Feb 2', spend: 1280, impressions: 98000, clicks: 2940, conversions: 19, revenue: 5700 },
        { date: 'Feb 3', spend: 1450, impressions: 112000, clicks: 3360, conversions: 24, revenue: 7200 },
        { date: 'Feb 4', spend: 1520, impressions: 118000, clicks: 3540, conversions: 26, revenue: 7800 },
        { date: 'Feb 5', spend: 1380, impressions: 108000, clicks: 3240, conversions: 22, revenue: 6600 },
        { date: 'Feb 6', spend: 980, impressions: 78000, clicks: 2340, conversions: 14, revenue: 4200 },
        { date: 'Feb 7', spend: 850, impressions: 68000, clicks: 2040, conversions: 11, revenue: 3300 },
        { date: 'Feb 8', spend: 1480, impressions: 115000, clicks: 3450, conversions: 25, revenue: 7500 },
        { date: 'Feb 9', spend: 1550, impressions: 120000, clicks: 3600, conversions: 27, revenue: 8100 },
        { date: 'Feb 10', spend: 1420, impressions: 110000, clicks: 3300, conversions: 23, revenue: 6900 },
        { date: 'Feb 11', spend: 1620, impressions: 125000, clicks: 3750, conversions: 28, revenue: 8400 },
        { date: 'Feb 12', spend: 1580, impressions: 122000, clicks: 3660, conversions: 26, revenue: 7800 },
        { date: 'Feb 13', spend: 1050, impressions: 82000, clicks: 2460, conversions: 15, revenue: 4500 },
        { date: 'Feb 14', spend: 920, impressions: 72000, clicks: 2160, conversions: 12, revenue: 3600 },
        { date: 'Feb 15', spend: 1680, impressions: 130000, clicks: 3900, conversions: 29, revenue: 8700 }
      ],

      // Demographics
      demographics: {
        age: [
          { name: '18-24', value: 42, color: '#00ffaa' },
          { name: '25-34', value: 35, color: '#00aaff' },
          { name: '35-44', value: 15, color: '#ff9f00' },
          { name: '45+', value: 8, color: '#ff6b6b' }
        ],
        gender: [
          { name: 'Female', value: 54, color: '#00ffaa' },
          { name: 'Male', value: 44, color: '#00aaff' },
          { name: 'Other', value: 2, color: '#ff9f00' }
        ],
        device: [
          { name: 'Mobile', value: 68, color: '#00ffaa' },
          { name: 'Desktop', value: 28, color: '#00aaff' },
          { name: 'Tablet', value: 4, color: '#ff9f00' }
        ]
      },

      // Top Ad Creatives
      topCreatives: [
        { name: 'Video: Campus Life', type: 'Video', impressions: 320000, clicks: 12800, ctr: 4.0, conversions: 89 },
        { name: 'Carousel: Programs', type: 'Carousel', impressions: 280000, clicks: 9800, ctr: 3.5, conversions: 72 },
        { name: 'Image: Scholarship', type: 'Image', impressions: 245000, clicks: 7350, ctr: 3.0, conversions: 58 }
      ]
    },

    // ===== SEO DATA =====
    seo: {
      kpis: {
        organicSessions: 48500,
        organicLeads: 182,
        avgPosition: 8.4,
        domainAuthority: 52,
        totalKeywords: 1247,
        keywordsTop10: 89,
        keywordsTop3: 23,
        organicConversions: 109,
        organicRevenue: 31200,
        bounceRate: 42.3,
        avgSessionDuration: '3:24',
        pagesPerSession: 4.2,
        // Trends
        sessionsTrend: 18,
        leadsTrend: 24,
        positionTrend: -0.8,
        daTrend: 2
      },

      // Keyword Rankings Table
      keywords: [
        { keyword: 'best mba programs uk', position: 3, change: 2, volume: 2400, traffic: 580, difficulty: 72, url: '/programs/mba' },
        { keyword: 'business analytics masters', position: 5, change: 1, volume: 1900, traffic: 320, difficulty: 68, url: '/programs/msc-business-analytics' },
        { keyword: 'university exeter courses', position: 2, change: 0, volume: 3200, traffic: 890, difficulty: 45, url: '/courses' },
        { keyword: 'data science degree uk', position: 8, change: 3, volume: 2800, traffic: 185, difficulty: 78, url: '/programs/data-science' },
        { keyword: 'online mba programs', position: 12, change: -2, volume: 4500, traffic: 120, difficulty: 82, url: '/programs/online-mba' },
        { keyword: 'exeter university ranking', position: 4, change: 1, volume: 1800, traffic: 380, difficulty: 38, url: '/about/rankings' },
        { keyword: 'scholarship for masters uk', position: 6, change: 4, volume: 2200, traffic: 290, difficulty: 65, url: '/scholarships' },
        { keyword: 'part time mba exeter', position: 1, change: 0, volume: 480, traffic: 420, difficulty: 35, url: '/programs/part-time-mba' },
        { keyword: 'marketing masters degree', position: 15, change: -1, volume: 3100, traffic: 85, difficulty: 75, url: '/programs/msc-marketing' },
        { keyword: 'finance masters uk', position: 11, change: 2, volume: 2600, traffic: 145, difficulty: 71, url: '/programs/msc-finance' }
      ],

      // Organic Traffic Trend
      trafficTrend: [
        { date: 'Sep', sessions: 38200, conversions: 78 },
        { date: 'Oct', sessions: 41500, conversions: 86 },
        { date: 'Nov', sessions: 44800, conversions: 92 },
        { date: 'Dec', sessions: 42100, conversions: 88 },
        { date: 'Jan', sessions: 46200, conversions: 98 },
        { date: 'Feb', sessions: 48500, conversions: 109 }
      ],

      // Top Landing Pages
      topPages: [
        { page: '/programs/mba', sessions: 8500, bounceRate: 35.2, conversions: 42 },
        { page: '/courses', sessions: 7200, bounceRate: 28.5, conversions: 28 },
        { page: '/programs/msc-business-analytics', sessions: 5800, bounceRate: 32.1, conversions: 24 },
        { page: '/scholarships', sessions: 4500, bounceRate: 38.4, conversions: 18 },
        { page: '/about/campus', sessions: 3900, bounceRate: 45.2, conversions: 8 }
      ],

      // Technical SEO
      technicalScores: {
        pageSpeed: { mobile: 72, desktop: 89 },
        coreWebVitals: { lcp: 2.1, fid: 45, cls: 0.08 },
        mobileUsability: 94,
        crawlErrors: 12,
        indexedPages: 2847
      }
    },

    // ===== SOCIAL MEDIA DATA =====
    social: {
      kpis: {
        totalFollowers: 45200,
        followerGrowth: 1240,
        engagementRate: 4.2,
        totalReach: 285000,
        totalImpressions: 520000,
        videoViews: 89000,
        shares: 2450,
        comments: 3820,
        // Trends
        followersTrend: 8,
        engagementTrend: 12,
        reachTrend: 15
      },

      // By Platform
      platforms: [
        { name: 'Instagram', followers: 18500, engagement: 5.2, reach: 125000, posts: 24 },
        { name: 'LinkedIn', followers: 12400, engagement: 3.8, reach: 85000, posts: 18 },
        { name: 'Facebook', followers: 8900, engagement: 2.9, reach: 52000, posts: 20 },
        { name: 'YouTube', followers: 5400, engagement: 6.1, reach: 23000, posts: 8 }
      ],

      // Top Posts
      topPosts: [
        { platform: 'Instagram', content: 'Student graduation ceremony reel', type: 'Video', reach: 28500, engagement: 1850, shares: 245 },
        { platform: 'LinkedIn', content: 'Alumni success story: Tech CEO', type: 'Article', reach: 18200, engagement: 920, shares: 180 },
        { platform: 'YouTube', content: 'Campus tour 2026', type: 'Video', reach: 15400, engagement: 780, shares: 120 },
        { platform: 'Instagram', content: 'Library study spots carousel', type: 'Carousel', reach: 12800, engagement: 1240, shares: 95 },
        { platform: 'Facebook', content: 'Open day announcement', type: 'Image', reach: 9500, engagement: 450, shares: 85 }
      ],

      // Follower Growth Trend
      followerTrend: [
        { date: 'Sep', instagram: 16200, linkedin: 10800, facebook: 8200, youtube: 4800 },
        { date: 'Oct', instagram: 16800, linkedin: 11200, facebook: 8400, youtube: 4950 },
        { date: 'Nov', instagram: 17400, linkedin: 11600, facebook: 8550, youtube: 5100 },
        { date: 'Dec', instagram: 17900, linkedin: 11900, facebook: 8700, youtube: 5200 },
        { date: 'Jan', instagram: 18200, linkedin: 12100, facebook: 8800, youtube: 5300 },
        { date: 'Feb', instagram: 18500, linkedin: 12400, facebook: 8900, youtube: 5400 }
      ],

      // Content Performance by Type
      contentTypes: [
        { type: 'Video', posts: 15, avgReach: 12500, avgEngagement: 6.8 },
        { type: 'Carousel', posts: 22, avgReach: 8200, avgEngagement: 5.2 },
        { type: 'Image', posts: 35, avgReach: 5400, avgEngagement: 3.8 },
        { type: 'Article', posts: 12, avgReach: 4200, avgEngagement: 2.9 }
      ],

      // Best Posting Times
      bestTimes: [
        { day: 'Monday', hour: '9 AM', engagement: 5.8 },
        { day: 'Wednesday', hour: '12 PM', engagement: 6.2 },
        { day: 'Thursday', hour: '6 PM', engagement: 5.5 },
        { day: 'Saturday', hour: '10 AM', engagement: 4.8 }
      ]
    },

    // Funnel Data
    funnel: {
      impressions: 4850000,
      reach: 2800000,
      clicks: 145500,
      leads: 1247,
      conversions: 748
    }
  },

  // ============ DRIVEMAX MOTORS ============
  drivemax_motors: {
    id: 'drivemax_motors',
    name: 'DriveMax Motors',
    industry: 'Automobile',
    logo: '🚗',
    description: 'Multi-brand car dealership with 8 showrooms across the UK',

    overall: {
      totalSpend: 52400,
      totalRevenue: 272500,
      overallROAS: 5.2,
      totalLeads: 892,
      totalImpressions: 6200000,
      totalClicks: 186000,
      blendedCPC: 0.28,
      blendedCTR: 3.0,
      blendedConvRate: 0.48,
      totalConversions: 535,
      spendTrend: 8,
      revenueTrend: 15,
      roasTrend: 12,
      leadsTrend: 18,
      impressionsTrend: 25,
      clicksTrend: 22
    },

    paidMedia: {
      kpis: {
        spend: 47500,
        impressions: 5400000,
        clicks: 162000,
        ctr: 3.0,
        cpc: 0.29,
        conversions: 482,
        convRate: 0.30,
        revenue: 247000,
        roas: 5.2
      },

      channels: [
        { name: 'Google Ads', spend: 24500, impressions: 2450000, clicks: 73500, ctr: 3.0, cpc: 0.33, leads: 412, conversions: 247, revenue: 128500, roas: 5.24 },
        { name: 'Facebook Ads', spend: 15800, impressions: 1890000, clicks: 56700, ctr: 3.0, cpc: 0.28, leads: 285, conversions: 171, revenue: 82200, roas: 5.20 },
        { name: 'Display', spend: 7200, impressions: 1060000, clicks: 31800, ctr: 3.0, cpc: 0.23, leads: 118, conversions: 64, revenue: 36300, roas: 5.04 }
      ],

      objectives: [
        { name: 'Lead Generation', spend: 28500, conversions: 312, percentage: 60 },
        { name: 'Awareness', spend: 11400, conversions: 85, percentage: 24 },
        { name: 'Retargeting', spend: 7600, conversions: 85, percentage: 16 }
      ],

      campaigns: [
        { name: 'New SUV Launch 2026', objective: 'Awareness', channel: 'Google Ads', status: 'Active', spend: 12500, impressions: 850000, clicks: 25500, leads: 198, conversions: 119, roas: 5.8, cpc: 0.49, ctr: 3.0 },
        { name: 'Test Drive Bookings', objective: 'Lead Gen', channel: 'Facebook Ads', status: 'Active', spend: 8400, impressions: 620000, clicks: 18600, leads: 145, conversions: 87, roas: 4.9, cpc: 0.45, ctr: 3.0 },
        { name: 'Year-End Clearance', objective: 'Lead Gen', channel: 'Google Ads', status: 'Active', spend: 6800, impressions: 480000, clicks: 14400, leads: 124, conversions: 74, roas: 5.4, cpc: 0.47, ctr: 3.0 },
        { name: 'Pre-Owned Showcase', objective: 'Lead Gen', channel: 'Display', status: 'Active', spend: 5200, impressions: 720000, clicks: 21600, leads: 82, conversions: 49, roas: 4.2, cpc: 0.24, ctr: 3.0 },
        { name: 'Service Retargeting', objective: 'Retargeting', channel: 'Google Ads', status: 'Active', spend: 3200, impressions: 280000, clicks: 8400, leads: 56, conversions: 45, roas: 6.8, cpc: 0.38, ctr: 3.0 },
        { name: 'Finance Offers', objective: 'Lead Gen', channel: 'Facebook Ads', status: 'Active', spend: 4800, impressions: 380000, clicks: 11400, leads: 98, conversions: 59, roas: 5.1, cpc: 0.42, ctr: 3.0 }
      ],

      dailyData: [
        { date: 'Feb 1', spend: 1580, impressions: 178000, clicks: 5340, conversions: 16, revenue: 8200 },
        { date: 'Feb 2', spend: 1620, impressions: 182000, clicks: 5460, conversions: 17, revenue: 8700 },
        { date: 'Feb 3', spend: 1750, impressions: 195000, clicks: 5850, conversions: 19, revenue: 9800 },
        { date: 'Feb 4', spend: 1820, impressions: 205000, clicks: 6150, conversions: 20, revenue: 10200 },
        { date: 'Feb 5', spend: 1680, impressions: 188000, clicks: 5640, conversions: 18, revenue: 9200 },
        { date: 'Feb 6', spend: 1420, impressions: 158000, clicks: 4740, conversions: 14, revenue: 7200 },
        { date: 'Feb 7', spend: 1280, impressions: 142000, clicks: 4260, conversions: 12, revenue: 6100 },
        { date: 'Feb 8', spend: 1780, impressions: 198000, clicks: 5940, conversions: 19, revenue: 9700 },
        { date: 'Feb 9', spend: 1850, impressions: 208000, clicks: 6240, conversions: 21, revenue: 10800 },
        { date: 'Feb 10', spend: 1720, impressions: 192000, clicks: 5760, conversions: 18, revenue: 9200 }
      ],

      demographics: {
        age: [
          { name: '18-24', value: 12, color: '#00ffaa' },
          { name: '25-34', value: 28, color: '#00aaff' },
          { name: '35-44', value: 35, color: '#ff9f00' },
          { name: '45+', value: 25, color: '#ff6b6b' }
        ],
        gender: [
          { name: 'Female', value: 38, color: '#00ffaa' },
          { name: 'Male', value: 60, color: '#00aaff' },
          { name: 'Other', value: 2, color: '#ff9f00' }
        ],
        device: [
          { name: 'Mobile', value: 52, color: '#00ffaa' },
          { name: 'Desktop', value: 42, color: '#00aaff' },
          { name: 'Tablet', value: 6, color: '#ff9f00' }
        ]
      },

      topCreatives: [
        { name: 'Video: SUV Off-road', type: 'Video', impressions: 420000, clicks: 16800, ctr: 4.0, conversions: 112 },
        { name: 'Carousel: Model Range', type: 'Carousel', impressions: 380000, clicks: 13300, ctr: 3.5, conversions: 89 },
        { name: 'Image: Finance Deal', type: 'Image', impressions: 320000, clicks: 9600, ctr: 3.0, conversions: 72 }
      ]
    },

    seo: {
      kpis: {
        organicSessions: 62400,
        organicLeads: 245,
        avgPosition: 6.8,
        domainAuthority: 48,
        totalKeywords: 892,
        keywordsTop10: 124,
        keywordsTop3: 38,
        organicConversions: 147,
        organicRevenue: 42800,
        bounceRate: 38.5,
        avgSessionDuration: '2:58',
        pagesPerSession: 5.1,
        sessionsTrend: 22,
        leadsTrend: 28,
        positionTrend: -1.2,
        daTrend: 3
      },

      keywords: [
        { keyword: 'used cars near me', position: 4, change: 2, volume: 8500, traffic: 1250, difficulty: 78, url: '/used-cars' },
        { keyword: 'new suv 2026', position: 6, change: 3, volume: 4200, traffic: 580, difficulty: 72, url: '/new-cars/suv' },
        { keyword: 'car finance uk', position: 8, change: -1, volume: 6800, traffic: 420, difficulty: 82, url: '/finance' },
        { keyword: 'test drive booking', position: 2, change: 1, volume: 2400, traffic: 680, difficulty: 45, url: '/test-drive' },
        { keyword: 'electric cars 2026', position: 12, change: 4, volume: 5200, traffic: 185, difficulty: 75, url: '/electric' },
        { keyword: 'car dealership exeter', position: 1, change: 0, volume: 1800, traffic: 1580, difficulty: 35, url: '/locations/exeter' },
        { keyword: 'part exchange value', position: 5, change: 2, volume: 3200, traffic: 520, difficulty: 58, url: '/part-exchange' },
        { keyword: 'car service booking', position: 3, change: 0, volume: 2800, traffic: 720, difficulty: 42, url: '/service' }
      ],

      trafficTrend: [
        { date: 'Sep', sessions: 48500, conversions: 105 },
        { date: 'Oct', sessions: 52800, conversions: 118 },
        { date: 'Nov', sessions: 56200, conversions: 128 },
        { date: 'Dec', sessions: 58400, conversions: 135 },
        { date: 'Jan', sessions: 60100, conversions: 142 },
        { date: 'Feb', sessions: 62400, conversions: 147 }
      ],

      topPages: [
        { page: '/used-cars', sessions: 12400, bounceRate: 32.5, conversions: 58 },
        { page: '/new-cars/suv', sessions: 8900, bounceRate: 28.2, conversions: 42 },
        { page: '/finance', sessions: 6500, bounceRate: 35.8, conversions: 28 },
        { page: '/test-drive', sessions: 5200, bounceRate: 22.4, conversions: 45 },
        { page: '/locations/exeter', sessions: 4800, bounceRate: 42.1, conversions: 18 }
      ],

      technicalScores: {
        pageSpeed: { mobile: 68, desktop: 85 },
        coreWebVitals: { lcp: 2.4, fid: 52, cls: 0.12 },
        mobileUsability: 91,
        crawlErrors: 8,
        indexedPages: 1245
      }
    },

    social: {
      kpis: {
        totalFollowers: 28400,
        followerGrowth: 890,
        engagementRate: 3.8,
        totalReach: 185000,
        totalImpressions: 380000,
        videoViews: 125000,
        shares: 1850,
        comments: 2420,
        followersTrend: 12,
        engagementTrend: 8,
        reachTrend: 18
      },

      platforms: [
        { name: 'Facebook', followers: 12500, engagement: 3.2, reach: 78000, posts: 22 },
        { name: 'Instagram', followers: 9800, engagement: 4.8, reach: 62000, posts: 28 },
        { name: 'YouTube', followers: 4200, engagement: 5.2, reach: 32000, posts: 12 },
        { name: 'LinkedIn', followers: 1900, engagement: 2.4, reach: 13000, posts: 8 }
      ],

      topPosts: [
        { platform: 'YouTube', content: 'New SUV reveal and test drive', type: 'Video', reach: 42000, engagement: 2850, shares: 380 },
        { platform: 'Instagram', content: 'Customer delivery day reel', type: 'Video', reach: 28500, engagement: 1950, shares: 245 },
        { platform: 'Facebook', content: 'Year-end sale announcement', type: 'Image', reach: 18200, engagement: 920, shares: 180 }
      ],

      followerTrend: [
        { date: 'Sep', facebook: 11200, instagram: 8500, youtube: 3600, linkedin: 1650 },
        { date: 'Oct', facebook: 11600, instagram: 8900, youtube: 3750, linkedin: 1720 },
        { date: 'Nov', facebook: 11900, instagram: 9200, youtube: 3900, linkedin: 1780 },
        { date: 'Dec', facebook: 12100, instagram: 9450, youtube: 4000, linkedin: 1820 },
        { date: 'Jan', facebook: 12300, instagram: 9650, youtube: 4100, linkedin: 1860 },
        { date: 'Feb', facebook: 12500, instagram: 9800, youtube: 4200, linkedin: 1900 }
      ],

      contentTypes: [
        { type: 'Video', posts: 18, avgReach: 15200, avgEngagement: 5.8 },
        { type: 'Carousel', posts: 24, avgReach: 8500, avgEngagement: 4.2 },
        { type: 'Image', posts: 28, avgReach: 5200, avgEngagement: 3.1 }
      ]
    },

    funnel: {
      impressions: 6200000,
      reach: 3800000,
      clicks: 186000,
      leads: 892,
      conversions: 535
    }
  },

  // ============ MEDCARE CLINICS ============
  medcare_clinics: {
    id: 'medcare_clinics',
    name: 'MedCare Clinics',
    industry: 'Healthcare',
    logo: '🏥',
    description: 'Private healthcare provider with 12 clinics across South West England',

    overall: {
      totalSpend: 38600,
      totalRevenue: 158300,
      overallROAS: 4.1,
      totalLeads: 654,
      totalImpressions: 3200000,
      totalClicks: 96000,
      blendedCPC: 0.40,
      blendedCTR: 3.0,
      blendedConvRate: 0.68,
      totalConversions: 392,
      spendTrend: 5,
      revenueTrend: 22,
      roasTrend: 15,
      leadsTrend: 28,
      impressionsTrend: 12,
      clicksTrend: 18
    },

    paidMedia: {
      kpis: {
        spend: 30100,
        impressions: 2450000,
        clicks: 73500,
        ctr: 3.0,
        cpc: 0.41,
        conversions: 312,
        convRate: 0.42,
        revenue: 123500,
        roas: 4.1
      },

      channels: [
        { name: 'Google Ads', spend: 18200, impressions: 1280000, clicks: 38400, ctr: 3.0, cpc: 0.47, leads: 324, conversions: 194, revenue: 74800, roas: 4.11 },
        { name: 'Facebook Ads', spend: 8400, impressions: 820000, clicks: 24600, ctr: 3.0, cpc: 0.34, leads: 98, conversions: 59, revenue: 34400, roas: 4.10 },
        { name: 'Display', spend: 3500, impressions: 350000, clicks: 10500, ctr: 3.0, cpc: 0.33, leads: 47, conversions: 28, revenue: 14300, roas: 4.09 }
      ],

      objectives: [
        { name: 'Lead Generation', spend: 18500, conversions: 215, percentage: 62 },
        { name: 'Awareness', spend: 7200, conversions: 58, percentage: 24 },
        { name: 'Local', spend: 4400, conversions: 39, percentage: 14 }
      ],

      campaigns: [
        { name: 'General Checkup Promo', objective: 'Lead Gen', channel: 'Google Ads', status: 'Active', spend: 8500, impressions: 520000, clicks: 15600, leads: 156, conversions: 94, roas: 4.5, cpc: 0.54, ctr: 3.0 },
        { name: 'Dental Care Package', objective: 'Lead Gen', channel: 'Google Ads', status: 'Active', spend: 5200, impressions: 380000, clicks: 11400, leads: 98, conversions: 59, roas: 4.2, cpc: 0.46, ctr: 3.0 },
        { name: 'Health Awareness Week', objective: 'Awareness', channel: 'Facebook Ads', status: 'Active', spend: 4800, impressions: 480000, clicks: 14400, leads: 62, conversions: 37, roas: 3.4, cpc: 0.33, ctr: 3.0 },
        { name: 'Flu Vaccination Drive', objective: 'Lead Gen', channel: 'Facebook Ads', status: 'Completed', spend: 2200, impressions: 220000, clicks: 6600, leads: 38, conversions: 28, roas: 5.8, cpc: 0.33, ctr: 3.0 },
        { name: 'Clinic Near You', objective: 'Local', channel: 'Google Ads', status: 'Active', spend: 4500, impressions: 380000, clicks: 11400, leads: 95, conversions: 57, roas: 4.8, cpc: 0.39, ctr: 3.0 }
      ],

      dailyData: [
        { date: 'Feb 1', spend: 1020, impressions: 82000, clicks: 2460, conversions: 10, revenue: 4100 },
        { date: 'Feb 2', spend: 1080, impressions: 86000, clicks: 2580, conversions: 11, revenue: 4500 },
        { date: 'Feb 3', spend: 1150, impressions: 92000, clicks: 2760, conversions: 12, revenue: 4900 },
        { date: 'Feb 4', spend: 1220, impressions: 98000, clicks: 2940, conversions: 13, revenue: 5300 },
        { date: 'Feb 5', spend: 1080, impressions: 86000, clicks: 2580, conversions: 11, revenue: 4500 },
        { date: 'Feb 6', spend: 850, impressions: 68000, clicks: 2040, conversions: 8, revenue: 3300 },
        { date: 'Feb 7', spend: 720, impressions: 58000, clicks: 1740, conversions: 6, revenue: 2500 },
        { date: 'Feb 8', spend: 1180, impressions: 94000, clicks: 2820, conversions: 12, revenue: 4900 },
        { date: 'Feb 9', spend: 1250, impressions: 100000, clicks: 3000, conversions: 14, revenue: 5700 },
        { date: 'Feb 10', spend: 1120, impressions: 90000, clicks: 2700, conversions: 11, revenue: 4500 }
      ],

      demographics: {
        age: [
          { name: '18-24', value: 15, color: '#00ffaa' },
          { name: '25-34', value: 25, color: '#00aaff' },
          { name: '35-44', value: 30, color: '#ff9f00' },
          { name: '45+', value: 30, color: '#ff6b6b' }
        ],
        gender: [
          { name: 'Female', value: 58, color: '#00ffaa' },
          { name: 'Male', value: 40, color: '#00aaff' },
          { name: 'Other', value: 2, color: '#ff9f00' }
        ],
        device: [
          { name: 'Mobile', value: 72, color: '#00ffaa' },
          { name: 'Desktop', value: 24, color: '#00aaff' },
          { name: 'Tablet', value: 4, color: '#ff9f00' }
        ]
      },

      topCreatives: [
        { name: 'Video: Doctor Q&A', type: 'Video', impressions: 280000, clicks: 11200, ctr: 4.0, conversions: 68 },
        { name: 'Carousel: Services', type: 'Carousel', impressions: 220000, clicks: 7700, ctr: 3.5, conversions: 52 },
        { name: 'Image: Health Check', type: 'Image', impressions: 180000, clicks: 5400, ctr: 3.0, conversions: 38 }
      ]
    },

    seo: {
      kpis: {
        organicSessions: 38200,
        organicLeads: 185,
        avgPosition: 7.2,
        domainAuthority: 45,
        totalKeywords: 654,
        keywordsTop10: 78,
        keywordsTop3: 18,
        organicConversions: 111,
        organicRevenue: 31200,
        bounceRate: 35.2,
        avgSessionDuration: '3:42',
        pagesPerSession: 4.8,
        sessionsTrend: 15,
        leadsTrend: 22,
        positionTrend: -0.6,
        daTrend: 2
      },

      keywords: [
        { keyword: 'private gp near me', position: 3, change: 1, volume: 4800, traffic: 980, difficulty: 68, url: '/services/gp' },
        { keyword: 'health check exeter', position: 1, change: 0, volume: 1200, traffic: 1050, difficulty: 32, url: '/services/health-check' },
        { keyword: 'private dentist uk', position: 8, change: 2, volume: 5200, traffic: 320, difficulty: 75, url: '/services/dental' },
        { keyword: 'blood test near me', position: 4, change: 1, volume: 6800, traffic: 850, difficulty: 62, url: '/services/blood-tests' },
        { keyword: 'flu vaccine private', position: 2, change: 3, volume: 2400, traffic: 680, difficulty: 45, url: '/services/vaccinations' },
        { keyword: 'private clinic exeter', position: 1, change: 0, volume: 980, traffic: 860, difficulty: 28, url: '/locations/exeter' },
        { keyword: 'corporate health screening', position: 6, change: 2, volume: 1800, traffic: 280, difficulty: 58, url: '/corporate' },
        { keyword: 'online doctor consultation', position: 12, change: -2, volume: 8500, traffic: 185, difficulty: 82, url: '/online' }
      ],

      trafficTrend: [
        { date: 'Sep', sessions: 31200, conversions: 82 },
        { date: 'Oct', sessions: 33500, conversions: 88 },
        { date: 'Nov', sessions: 35100, conversions: 94 },
        { date: 'Dec', sessions: 34200, conversions: 92 },
        { date: 'Jan', sessions: 36800, conversions: 102 },
        { date: 'Feb', sessions: 38200, conversions: 111 }
      ],

      topPages: [
        { page: '/services/gp', sessions: 8200, bounceRate: 28.5, conversions: 38 },
        { page: '/services/health-check', sessions: 6800, bounceRate: 25.2, conversions: 32 },
        { page: '/services/blood-tests', sessions: 5400, bounceRate: 32.4, conversions: 22 },
        { page: '/locations/exeter', sessions: 4200, bounceRate: 38.8, conversions: 15 },
        { page: '/services/dental', sessions: 3800, bounceRate: 30.5, conversions: 18 }
      ],

      technicalScores: {
        pageSpeed: { mobile: 78, desktop: 92 },
        coreWebVitals: { lcp: 1.8, fid: 38, cls: 0.05 },
        mobileUsability: 96,
        crawlErrors: 5,
        indexedPages: 892
      }
    },

    social: {
      kpis: {
        totalFollowers: 18500,
        followerGrowth: 520,
        engagementRate: 5.2,
        totalReach: 125000,
        totalImpressions: 280000,
        videoViews: 42000,
        shares: 1250,
        comments: 1850,
        followersTrend: 15,
        engagementTrend: 18,
        reachTrend: 22
      },

      platforms: [
        { name: 'Facebook', followers: 8500, engagement: 4.8, reach: 58000, posts: 18 },
        { name: 'Instagram', followers: 6200, engagement: 5.8, reach: 42000, posts: 22 },
        { name: 'LinkedIn', followers: 2800, engagement: 3.2, reach: 18000, posts: 12 },
        { name: 'YouTube', followers: 1000, engagement: 6.5, reach: 7000, posts: 6 }
      ],

      topPosts: [
        { platform: 'Instagram', content: 'Doctor introduction reel', type: 'Video', reach: 18500, engagement: 1420, shares: 185 },
        { platform: 'Facebook', content: 'Health tips Tuesday', type: 'Carousel', reach: 12200, engagement: 850, shares: 120 },
        { platform: 'YouTube', content: 'Clinic tour video', type: 'Video', reach: 8500, engagement: 620, shares: 95 }
      ],

      followerTrend: [
        { date: 'Sep', facebook: 7800, instagram: 5600, linkedin: 2500, youtube: 850 },
        { date: 'Oct', facebook: 7950, instagram: 5750, linkedin: 2580, youtube: 880 },
        { date: 'Nov', facebook: 8100, instagram: 5900, linkedin: 2650, youtube: 920 },
        { date: 'Dec', facebook: 8250, instagram: 6000, linkedin: 2700, youtube: 950 },
        { date: 'Jan', facebook: 8380, instagram: 6100, linkedin: 2750, youtube: 980 },
        { date: 'Feb', facebook: 8500, instagram: 6200, linkedin: 2800, youtube: 1000 }
      ],

      contentTypes: [
        { type: 'Video', posts: 12, avgReach: 9800, avgEngagement: 6.2 },
        { type: 'Carousel', posts: 18, avgReach: 6500, avgEngagement: 5.1 },
        { type: 'Image', posts: 28, avgReach: 4200, avgEngagement: 4.2 }
      ]
    },

    funnel: {
      impressions: 3200000,
      reach: 1950000,
      clicks: 96000,
      leads: 654,
      conversions: 392
    }
  }
};

// Export for use in dashboard
window.DASHBOARD_DATA = DASHBOARD_DATA;