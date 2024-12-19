
document.addEventListener("DOMContentLoaded", function () {
    let isPlayingVid = false;
    let isMuted = false;
    let intervals;

    const homeBtn = document.querySelectorAll("header nav ul li")[0];
    const AgentBtn = document.querySelectorAll("header nav ul li")[1];
    const featuredItemsContainer = document.querySelectorAll('.featured-content .featured');
    const containers = {
      "Kerarapon": featuredItemsContainer[0],
      "Ngong": featuredItemsContainer[1],
      "Kibiko": featuredItemsContainer[2],
      "Maroroi": featuredItemsContainer[3],
      "Kiserian": featuredItemsContainer[4],
      "Saikeri": featuredItemsContainer[5],
      "Kimuka": featuredItemsContainer[6]
  };
  


    homeBtn.onclick = function () {
      window.location.href = "index.html";
      clearInterval(intervals);
    }

    AgentBtn.onclick = function () {
      goToAgents();
    }

    function goToAgents () {
      window.location.href = "agent.html";
      clearInterval(intervals);
    }

    window.addEventListener("scroll", function () {
      const scrollHeight = window.scrollY; // Amount scrolled vertically
      document.querySelector('.top-header').classList.toggle('scrolled', scrollHeight > 10);        
  });



      function showLoadingDiv(state) {
        const loadingDiv = document.querySelector('.loading-page-overlay');
        
        if (state) {
            loadingDiv.style.display = 'flex'; // Show the overlay
        } else {
            // Wait for 5 seconds before hiding the overlay
            setTimeout(() => {
                loadingDiv.style.display = 'none'; // Hide the overlay after 5 seconds
            }, 5000); // 5000 milliseconds = 5 seconds
        }
      }

    showLoadingDiv(false);

  
  
    const locations = [
      {
          town: "Kerarapon",
          selectValue: "kerarapon",
          placeImage: ["img1.jpg", "img15.jpg", "img16.jpg"],
          estimatedAcres: "200 Acres",
          NearbySchools: ["Kerarapon Secondary", "Domus", "Bethel Primary", "Serare Primary"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Kerarapon Hospital", "Kiserian Hospital", "Ngong Hospital"],
          region: "Kajiado County",
          population: "12,000",
          distanceFromCityCenter: "15 km from Nairobi",
          averageLandPrice: "3 Million Ksh per Acre",
          keyFeatures: ["Quiet environment", "Scenic views", "Proximity to nature reserves"],
          majorRoadsNearby: ["Ngong Road", "Karen-Ngong Bypass"],
          transportationOptions: ["Matatus", "Motorbikes", "Taxis"],
          landUtilization: "Residential",
          securityLevel: "High",
          internetProviders: ["Safaricom Fiber", "Faiba"],
          averageClimate: "Cool and breezy",
          historicalSites: ["Ngong Hills"],
          lands: [
            {
                landID: "EnkoBreezeProperties_1",
                landSize: "50 X 100",
                landImages: [],
                landLocation: "Kerarapon",
                landAssignedAgents: [],
                landPrice: "3 Million Ksh",
                landInstallment: "6 Months",
                landDiscount: "35%",
                landTitleNumber: "KTN/1234/5678",
                landDescription: "Prime residential plot with beautiful views and proximity to key amenities.",
                landType: "Residential",
                landAmenities: ["Water", "Electricity", "Proximity to schools"],
                landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
                landOwnershipStatus: "Freehold",
                landAccessibility: "Tarmac road 200 meters away",
                landProximity: "5 minutes to Karen Shopping Center",
                landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
                landView: "Mountain view",
                landCondition: "Cleared and leveled",
                landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "500,000 Ksh", firstPayment: "1 Million Ksh" },
                landLegalIssues: "None",
                landNeighbors: "Surrounded by gated residential homes",
                landFloodRisk: "Low",
                landClimate: "Warm and dry"
            },
            {
                landID: "EnkoBreezeProperties_2",
                landSize: "100 X 100",
                landImages: [],
                landLocation: "Kerarapon",
                landAssignedAgents: [],
                landPrice: "6 Million Ksh",
                landInstallment: "12 Months",
                landDiscount: "20%",
                landTitleNumber: "KTN/2345/6789",
                landDescription: "Large residential plot with scenic views and close to amenities.",
                landType: "Residential",
                landAmenities: ["Water", "Electricity", "Schools nearby"],
                landCoordinates: { latitude: -1.3457, longitude: 36.7891 },
                landOwnershipStatus: "Freehold",
                landAccessibility: "Tarmac road 150 meters away",
                landProximity: "10 minutes to Karen Shopping Center",
                landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
                landView: "Hills view",
                landCondition: "Partially cleared",
                landPaymentPlanDetails: { totalInstallments: 12, installmentAmount: "500,000 Ksh", firstPayment: "1 Million Ksh" },
                landLegalIssues: "None",
                landNeighbors: "Surrounded by agricultural land",
                landFloodRisk: "Low",
                landClimate: "Cool and breezy"
            },
            {
              landID: "EnkoBreezeProperties_3",
              landSize: "100 X 100",
              landImages: [],
              landLocation: "Kerarapon",
              landAssignedAgents: [],
              landPrice: "6 Million Ksh",
              landInstallment: "12 Months",
              landDiscount: "20%",
              landTitleNumber: "KTN/2345/6789",
              landDescription: "Large residential plot with scenic views and close to amenities.",
              landType: "Residential",
              landAmenities: ["Water", "Electricity", "Schools nearby"],
              landCoordinates: { latitude: -1.3457, longitude: 36.7891 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Tarmac road 150 meters away",
              landProximity: "10 minutes to Karen Shopping Center",
              landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
              landView: "Hills view",
              landCondition: "Partially cleared",
              landPaymentPlanDetails: { totalInstallments: 12, installmentAmount: "500,000 Ksh", firstPayment: "1 Million Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Surrounded by agricultural land",
              landFloodRisk: "Low",
              landClimate: "Cool and breezy"
          }
        ]
      },
      {
          town: "Ngong",
          selectValue: "ngong",
          placeImage: ["img12.jpg"],
          estimatedAcres: "500 Acres",
          numberOfLands:3,
          NearbySchools: ["PCEA Secondary", "Ngong Township"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "50,000",
          distanceFromCityCenter: "20 km from Nairobi",
          averageLandPrice: "2.5 Million Ksh per Acre",
          keyFeatures: ["Cool climate", "Hilly terrain", "Close to Ngong Hills"],
          majorRoadsNearby: ["Ngong Road", "Magadi Road"],
          transportationOptions: ["Matatus", "Buses", "Motorbikes"],
          landUtilization: "Mixed-use (Residential and Farming)",
          securityLevel: "Moderate",
          internetProviders: ["Safaricom Fiber", "Zuku", "Faiba"],
          averageClimate: "Cool and windy",
          historicalSites: ["Ngong Hills", "Olepolos"],
          lands: [
            {
                landID: "EnkoBreezeProperties_3",
                landSize: "60 X 100",
                landImages: [],
                landLocation: "Ngong",
                landAssignedAgents: [],
                landPrice: "2.5 Million Ksh",
                landInstallment: "8 Months",
                landDiscount: "30%",
                landTitleNumber: "NTN/1234/5678",
                landDescription: "Residential land with great views and easy access to amenities.",
                landType: "Residential",
                landAmenities: ["Water", "Electricity", "Near schools"],
                landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
                landOwnershipStatus: "Freehold",
                landAccessibility: "Tarmac road 300 meters away",
                landProximity: "15 minutes to Ngong town center",
                landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
                landView: "Ngong Hills view",
                landCondition: "Cleared and leveled",
                landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
                landLegalIssues: "None",
                landNeighbors: "Near residential homes",
                landFloodRisk: "Low",
                landClimate: "Cool and windy"
            },
            {
              landID: "EnkoBreezeProperties_3",
              landSize: "60 X 100",
              landImages: [],
              landLocation: "Ngong",
              landAssignedAgents: [],
              landPrice: "2.5 Million Ksh",
              landInstallment: "8 Months",
              landDiscount: "30%",
              landTitleNumber: "NTN/1234/5678",
              landDescription: "Residential land with great views and easy access to amenities.",
              landType: "Residential",
              landAmenities: ["Water", "Electricity", "Near schools"],
              landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Tarmac road 300 meters away",
              landProximity: "15 minutes to Ngong town center",
              landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
              landView: "Ngong Hills view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Near residential homes",
              landFloodRisk: "Low",
              landClimate: "Cool and windy"
          },
          {
            landID: "EnkoBreezeProperties_3",
            landSize: "60 X 100",
            landImages: [],
            landLocation: "Ngong",
            landAssignedAgents: [],
            landPrice: "2.5 Million Ksh",
            landInstallment: "8 Months",
            landDiscount: "30%",
            landTitleNumber: "NTN/1234/5678",
            landDescription: "Residential land with great views and easy access to amenities.",
            landType: "Residential",
            landAmenities: ["Water", "Electricity", "Near schools"],
            landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
            landOwnershipStatus: "Freehold",
            landAccessibility: "Tarmac road 300 meters away",
            landProximity: "15 minutes to Ngong town center",
            landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
            landView: "Ngong Hills view",
            landCondition: "Cleared and leveled",
            landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
            landLegalIssues: "None",
            landNeighbors: "Near residential homes",
            landFloodRisk: "Low",
            landClimate: "Cool and windy"
        }
        ]
      },

      {
          town: "Kibiko",
          selectValue: "kibiko",
          placeImage: ["img17.jpg"],
          estimatedAcres: "400 Acres",
          numberOfLands:2,
          NearbySchools: ["Kibiko Secondary", "Kibiko Primary"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "8,000",
          distanceFromCityCenter: "25 km from Nairobi",
          averageLandPrice: "2 Million Ksh per Acre",
          keyFeatures: ["Quiet environment", "Panoramic views", "Ideal for residential development"],
          majorRoadsNearby: ["Ngong-Suswa Road"],
          transportationOptions: ["Matatus", "Motorbikes"],
          landUtilization: "Residential and light farming",
          securityLevel: "High",
          internetProviders: ["Safaricom Fiber", "Faiba"],
          averageClimate: "Cool and sunny",
          historicalSites: ["Ngong Hills Forest", "Kibiko Caves"],
          lands: [
            {
                landID: "EnkoBreezeProperties_3",
                landSize: "60 X 100",
                landImages: [],
                landLocation: "Kibiko",
                landAssignedAgents: [],
                landPrice: "2.5 Million Ksh",
                landInstallment: "8 Months",
                landDiscount: "30%",
                landTitleNumber: "NTN/1234/5678",
                landDescription: "Residential land with great views and easy access to amenities.",
                landType: "Residential",
                landAmenities: ["Water", "Electricity", "Near schools"],
                landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
                landOwnershipStatus: "Freehold",
                landAccessibility: "Tarmac road 300 meters away",
                landProximity: "15 minutes to Ngong town center",
                landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
                landView: "Ngong Hills view",
                landCondition: "Cleared and leveled",
                landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
                landLegalIssues: "None",
                landNeighbors: "Near residential homes",
                landFloodRisk: "Low",
                landClimate: "Cool and windy"
            },
            {
              landID: "EnkoBreezeProperties_3",
              landSize: "60 X 100",
              landImages: [],
              landLocation: "Kibiko",
              landAssignedAgents: [],
              landPrice: "2.5 Million Ksh",
              landInstallment: "8 Months",
              landDiscount: "30%",
              landTitleNumber: "NTN/1234/5678",
              landDescription: "Residential land with great views and easy access to amenities.",
              landType: "Residential",
              landAmenities: ["Water", "Electricity", "Near schools"],
              landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Tarmac road 300 meters away",
              landProximity: "15 minutes to Ngong town center",
              landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
              landView: "Ngong Hills view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Near residential homes",
              landFloodRisk: "Low",
              landClimate: "Cool and windy"
          },
        ]
      },

      {
          town: "Kimuka",
          selectValue: "kimuka",
          placeImage: ["img2.jpg"],
          estimatedAcres: "700 Acres",
          numberOfLands:3,
          NearbySchools: ["PCEA Kimuka", "Kibiko Primary"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "12,000",
          distanceFromCityCenter: "30 km from Nairobi",
          averageLandPrice: "1.8 Million Ksh per Acre",
          keyFeatures: ["Spacious land", "Ideal for agricultural and residential projects", "Great views of Ngong Hills"],
          majorRoadsNearby: ["Ngong-Kimuka Road", "Magadi Road"],
          transportationOptions: ["Matatus", "Motorbikes", "Private Vehicles"],
          landUtilization: "Residential, Agricultural, and Commercial",
          securityLevel: "Moderate",
          internetProviders: ["Safaricom Fiber", "Zuku", "Faiba"],
          averageClimate: "Warm and sunny",
          historicalSites: ["Ngong Hills", "Kimuka Market"],
          lands: [
            {
              landID: "EnkoBreezeProperties_3",
              landSize: "60 X 100",
              landImages: [],
              landLocation: "Kibiko",
              landAssignedAgents: [],
              landPrice: "2.5 Million Ksh",
              landInstallment: "8 Months",
              landDiscount: "30%",
              landTitleNumber: "NTN/1234/5678",
              landDescription: "Residential land with great views and easy access to amenities.",
              landType: "Residential",
              landAmenities: ["Water", "Electricity", "Near schools"],
              landCoordinates: { latitude: -1.3589, longitude: 36.7831 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Tarmac road 300 meters away",
              landProximity: "15 minutes to Ngong town center",
              landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
              landView: "Ngong Hills view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 8, installmentAmount: "312,500 Ksh", firstPayment: "625,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Near residential homes",
              landFloodRisk: "Low",
              landClimate: "Cool and windy"
          },
          {
            landID: "Kimuka_Land_2",
            landSize: "50 X 100",
            landImages: ["img1.jpg"],
            landLocation: "Kimuka",
            landAssignedAgents: [],
            landPrice: "1 Million Ksh",
            landInstallment: "6 Months",
            landDiscount: "10%",
            landTitleNumber: "KTN/7890/1234",
            landDescription: "Serene residential plot suitable for farming and small-scale development.",
            landType: "Agricultural and Residential",
            landAmenities: ["Water", "Electricity", "Proximity to schools"],
            landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
            landOwnershipStatus: "Freehold",
            landAccessibility: "Access via Magadi Road",
            landProximity: "10 minutes to the nearest shopping center",
            landDocuments: ["Title Deed", "Survey Plan"],
            landView: "Rift Valley view",
            landCondition: "Cleared and leveled",
            landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
            landLegalIssues: "None",
            landNeighbors: "Farmlands and small residential homes",
            landFloodRisk: "Low",
            landClimate: "Hot and dry"
        },
        {
          landID: "Kimuka_Land_3",
          landSize: "50 X 100",
          landImages: ["img1.jpg"],
          landLocation: "Maroroi",
          landAssignedAgents: [],
          landPrice: "1 Million Ksh",
          landInstallment: "6 Months",
          landDiscount: "10%",
          landTitleNumber: "KTN/7890/1234",
          landDescription: "Serene residential plot suitable for farming and small-scale development.",
          landType: "Agricultural and Residential",
          landAmenities: ["Water", "Electricity", "Proximity to schools"],
          landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
          landOwnershipStatus: "Freehold",
          landAccessibility: "Access via Magadi Road",
          landProximity: "10 minutes to the nearest shopping center",
          landDocuments: ["Title Deed", "Survey Plan"],
          landView: "Rift Valley view",
          landCondition: "Cleared and leveled",
          landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
          landLegalIssues: "None",
          landNeighbors: "Farmlands and small residential homes",
          landFloodRisk: "Low",
          landClimate: "Hot and dry"
      }
          ]
      },
      {
          town: "Maroroi",
          selectValue: "maroroi",
          placeImage: ["img18.jpg"],
          estimatedAcres: "20 Acres",
          numberOfLands:1,
          NearbySchools: ["Ol-Maroroi Secondary", "Maroroi Primary"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "3,000",
          distanceFromCityCenter: "45 km from Nairobi",
          averageLandPrice: "1 Million Ksh per Acre",
          keyFeatures: ["Serene environment", "Ideal for farming or small-scale residential development", "Scenic views of the Great Rift Valley"],
          majorRoadsNearby: ["Magadi Road", "Oloolua Road"],
          transportationOptions: ["Matatus", "Buses", "Private Vehicles"],
          landUtilization: "Agricultural and Residential",
          securityLevel: "Moderate",
          internetProviders: ["Safaricom", "Zuku"],
          averageClimate: "Hot and dry",
          historicalSites: ["Ngong Hills", "Oloolua Forest"],
          lands: [
            {
              landID: "Maroroi_Land_1",
              landSize: "50 X 100",
              landImages: ["img1.jpg"],
              landLocation: "Maroroi",
              landAssignedAgents: [],
              landPrice: "1 Million Ksh",
              landInstallment: "6 Months",
              landDiscount: "10%",
              landTitleNumber: "KTN/7890/1234",
              landDescription: "Serene residential plot suitable for farming and small-scale development.",
              landType: "Agricultural and Residential",
              landAmenities: ["Water", "Electricity", "Proximity to schools"],
              landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Access via Magadi Road",
              landProximity: "10 minutes to the nearest shopping center",
              landDocuments: ["Title Deed", "Survey Plan"],
              landView: "Rift Valley view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Farmlands and small residential homes",
              landFloodRisk: "Low",
              landClimate: "Hot and dry"
          },
          {
            landID: "Maroroi_Land_1",
            landSize: "50 X 100",
            landImages: ["img1.jpg"],
            landLocation: "Maroroi",
            landAssignedAgents: [],
            landPrice: "1 Million Ksh",
            landInstallment: "6 Months",
            landDiscount: "10%",
            landTitleNumber: "KTN/7890/1234",
            landDescription: "Serene residential plot suitable for farming and small-scale development.",
            landType: "Agricultural and Residential",
            landAmenities: ["Water", "Electricity", "Proximity to schools"],
            landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
            landOwnershipStatus: "Freehold",
            landAccessibility: "Access via Magadi Road",
            landProximity: "10 minutes to the nearest shopping center",
            landDocuments: ["Title Deed", "Survey Plan"],
            landView: "Rift Valley view",
            landCondition: "Cleared and leveled",
            landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
            landLegalIssues: "None",
            landNeighbors: "Farmlands and small residential homes",
            landFloodRisk: "Low",
            landClimate: "Hot and dry"
        }
      ]
      },
      {
          town: "Saikeri",
          selectValue: "saikeri",
          placeImage: ["img18.jpg"],
          estimatedAcres: "800 Acres",
          numberOfLands:2,
          NearbySchools: ["Saikeri Secondary", "Saikeri Primary"],
          NearbyChurches: ["AIC Church", "Kerarapon Catholic Parish"],
          NearbyShopingCenter: ["Umoja Center", "The Hub"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "7,500",
          distanceFromCityCenter: "50 km from Nairobi",
          averageLandPrice: "1.5 Million Ksh per Acre",
          keyFeatures: ["Ideal for mixed-use development", "Peaceful environment with beautiful views of the Great Rift Valley", "High agricultural potential"],
          majorRoadsNearby: ["Magadi Road", "Saikeri Road"],
          transportationOptions: ["Matatus", "Private Vehicles", "Motorbikes"],
          landUtilization: "Agricultural, Residential, and Commercial",
          securityLevel: "Moderate",
          internetProviders: ["Safaricom", "Zuku", "Faiba"],
          averageClimate: "Warm and dry",
          historicalSites: ["Saikeri Hill", "Olorgesailie Prehistoric Site"],
          lands: [
            {
              landID: "Saikeri_Land_1",
              landSize: "100 X 100",
              landImages: ["img5.jpg"],
              landLocation: "Saikeri",
              landAssignedAgents: [],
              landPrice: "1.5 Million Ksh",
              landInstallment: "12 Months",
              landDiscount: "15%",
              landTitleNumber: "KTN/4567/8901",
              landDescription: "Mixed-use land ideal for both agricultural and residential purposes.",
              landType: "Agricultural, Residential",
              landAmenities: ["Water", "Electricity", "Proximity to main road"],
              landCoordinates: { latitude: -1.4567, longitude: 36.8970 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Accessible via Saikeri Road",
              landProximity: "15 minutes to Saikeri Secondary School",
              landDocuments: ["Title Deed", "Survey Plan"],
              landView: "Great Rift Valley view",
              landCondition: "Partially cleared",
              landPaymentPlanDetails: { totalInstallments: 12, installmentAmount: "150,000 Ksh", firstPayment: "500,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Farming community",
              landFloodRisk: "Medium",
              landClimate: "Warm and dry"
          },
          {
              landID: "Saikeri_Land_2",
              landSize: "100 X 100",
              landImages: ["img6.jpg"],
              landLocation: "Saikeri",
              landAssignedAgents: [],
              landPrice: "1.5 Million Ksh",
              landInstallment: "12 Months",
              landDiscount: "15%",
              landTitleNumber: "KTN/9876/5432",
              landDescription: "Large land perfect for commercial development or mixed-use residential and agricultural projects.",
              landType: "Commercial, Agricultural, Residential",
              landAmenities: ["Water", "Electricity", "Access to transport"],
              landCoordinates: { latitude: -1.5000, longitude: 36.8000 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Accessible via Saikeri Road",
              landProximity: "30 minutes to Saikeri Primary School",
              landDocuments: ["Title Deed", "Survey Plan", "Tax Compliance Certificate"],
              landView: "Panoramic valley view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 12, installmentAmount: "200,000 Ksh", firstPayment: "600,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Gated community and farmlands",
              landFloodRisk: "Low",
              landClimate: "Warm and dry"
          },
          ]
      },
      {
          town: "Kiserian",
          selectValue: "kiserian",
          placeImage: ["img10.jpg","img9.jpg"],
          estimatedAcres: "1000 Acres",
          numberOfLands:3,
          NearbySchools: ["Timan Primary", "Naromoru Primary", "Gategi Secondary"],
          NearbyChurches: ["AIC Church", "St Mary Catholic Parish"],
          NearbyShopingCenter: ["Tuskys Center", "Jiji"],
          NearbyHospitals: ["Karen Hospital", "St David Ngong Hospital"],
          region: "Kajiado County",
          population: "25,000",
          distanceFromCityCenter: "25 km from Nairobi",
          averageLandPrice: "2.5 Million Ksh per Acre",
          keyFeatures: ["Great for residential and commercial developments", "Well connected with major roads", "Close proximity to Nairobi makes it ideal for commuters"],
          majorRoadsNearby: ["Nairobi-Namanga Road", "Kiserian-Matasia Road"],
          transportationOptions: ["Matatus", "Private Vehicles", "Buses"],
          landUtilization: "Residential, Agricultural, and Commercial",
          securityLevel: "High",
          internetProviders: ["Safaricom", "Zuku", "Faiba"],
          averageClimate: "Mild and temperate",
          historicalSites: ["Ngong Hills", "Kiserian Market"],
          lands: [
            {
              landID: "Kiserian_Land_2",
              landSize: "50 X 100",
              landImages: ["img1.jpg"],
              landLocation: "Kiserian",
              landAssignedAgents: [],
              landPrice: "1 Million Ksh",
              landInstallment: "6 Months",
              landDiscount: "10%",
              landTitleNumber: "KTN/7890/1234",
              landDescription: "Serene residential plot suitable for farming and small-scale development.",
              landType: "Agricultural and Residential",
              landAmenities: ["Water", "Electricity", "Proximity to schools"],
              landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
              landOwnershipStatus: "Freehold",
              landAccessibility: "Access via Magadi Road",
              landProximity: "10 minutes to the nearest shopping center",
              landDocuments: ["Title Deed", "Survey Plan"],
              landView: "Rift Valley view",
              landCondition: "Cleared and leveled",
              landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
              landLegalIssues: "None",
              landNeighbors: "Farmlands and small residential homes",
              landFloodRisk: "Low",
              landClimate: "Hot and dry"
          },
          {
            landID: "Kiserian_Land_2",
            landSize: "50 X 100",
            landImages: ["img1.jpg"],
            landLocation: "Maroroi",
            landAssignedAgents: [],
            landPrice: "1 Million Ksh",
            landInstallment: "6 Months",
            landDiscount: "10%",
            landTitleNumber: "KTN/7890/1234",
            landDescription: "Serene residential plot suitable for farming and small-scale development.",
            landType: "Agricultural and Residential",
            landAmenities: ["Water", "Electricity", "Proximity to schools"],
            landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
            landOwnershipStatus: "Freehold",
            landAccessibility: "Access via Magadi Road",
            landProximity: "10 minutes to the nearest shopping center",
            landDocuments: ["Title Deed", "Survey Plan"],
            landView: "Rift Valley view",
            landCondition: "Cleared and leveled",
            landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
            landLegalIssues: "None",
            landNeighbors: "Farmlands and small residential homes",
            landFloodRisk: "Low",
            landClimate: "Hot and dry"
        }, {
          landID: "Maroroi_Land_2",
          landSize: "50 X 100",
          landImages: ["img1.jpg"],
          landLocation: "Maroroi",
          landAssignedAgents: [],
          landPrice: "1 Million Ksh",
          landInstallment: "6 Months",
          landDiscount: "10%",
          landTitleNumber: "KTN/7890/1234",
          landDescription: "Serene residential plot suitable for farming and small-scale development.",
          landType: "Agricultural and Residential",
          landAmenities: ["Water", "Electricity", "Proximity to schools"],
          landCoordinates: { latitude: -1.3456, longitude: 36.7890 },
          landOwnershipStatus: "Freehold",
          landAccessibility: "Access via Magadi Road",
          landProximity: "10 minutes to the nearest shopping center",
          landDocuments: ["Title Deed", "Survey Plan"],
          landView: "Rift Valley view",
          landCondition: "Cleared and leveled",
          landPaymentPlanDetails: { totalInstallments: 6, installmentAmount: "200,000 Ksh", firstPayment: "500,000 Ksh" },
          landLegalIssues: "None",
          landNeighbors: "Farmlands and small residential homes",
          landFloodRisk: "Low",
          landClimate: "Hot and dry"
      }
          ]
      }
  ];


  locations.forEach(location => {
    const preferredContainerName = location.town;
    const container = containers[preferredContainerName];
    const lands = location.lands;
    const imgBg = location.placeImage[0];

    if (lands && lands.length > 0) {
        lands.forEach(land => {
            addFeaturedItem(container, land.landSize, land.landOwnershipStatus, land.landPrice, land.landDiscount, land.landInstallment, land.landType, imgBg);
        });
    } else {
        console.log(`No lands available for ${location.town}`);
        container.innerHTML = `No lands available for ${location.town}`
    }
});

  function addFeaturedItem (container, size, ownshipStatus, price, discount, installment, landType, imgBg) {
    const featuredIt = document.createElement('div');
    featuredIt.classList.add('featured-item');

    featuredIt.innerHTML = `
        <div class="land-size">
                        <h3>Plot: ${size}</h3>
                        <button>View Image</button>
                    </div>

                    <div class="land-owns">
                        <span>${ownshipStatus}</span>
                    </div>

                    <div class="agent-contact">
                        <button>Contact Agent</button>
                        <button>&#8942;</button>
                    </div>
                    

                    <div class="land-price">
                        <div class="close-price-Details">
                            <button>More</button>
                            <button>&times;</button>
                        </div>
                        <ul>
                            <li><div class="left-price-detail">Available Price:</div><div class="right-price-detail">${price}</div></li>
                            <li><div class="left-price-detail">Discount:</div><div class="right-price-detail"> ${discount}</div></li>
                            <li><div class="left-price-detail">Installments:</div><div class="right-price-detail"> ${installment}</div></li>
                            <li><div class="left-price-detail">Land Type:</div><div class="right-price-detail"> ${landType}</div></li>
                        </ul>
                       
                    </div>`;

    container.appendChild(featuredIt);
    featuredIt.style.backgroundImage = `url('${imgBg}')`;


    const moreBtn = featuredIt.querySelectorAll(".agent-contact button")[1];
    const closeDetail = featuredIt.querySelectorAll('.land-price .close-price-Details button')[1];
    const imageBtn = featuredIt.querySelector('.land-size button');

    moreBtn.onclick = function () {
      const LandPriceDiv =featuredIt.querySelector(".land-price");
      LandPriceDiv.style.display = "flex";
    }

    closeDetail.onclick = function () {
      const LandPriceDiv = featuredIt.querySelector(".land-price");
      LandPriceDiv.style.display = "none";
    }


    imageBtn.onclick = function () {
      // Create an overlay for the image
      const overlay = document.createElement('div');
      overlay.classList.add('image-overlay');
      overlay.innerHTML = `
          <div class="overlay-content">
              <img src="${imgBg}" alt="Land Image" />
              <button class="close-overlay">&times</button>
          </div>`;

      // Append the overlay to the body
      document.body.appendChild(overlay);

      // Close the overlay when clicking the close button
      const closeOverlayBtn = overlay.querySelector('.close-overlay');
      closeOverlayBtn.onclick = function () {
          overlay.remove();
      };

      // Close the overlay when clicking anywhere outside the image
      overlay.onclick = function (e) {
          if (e.target === overlay) {
              overlay.remove();
          }
      };
  };
  }


  const quoteArea  = document.querySelector('.video-feature-intro .quote-updates h3');
  const videoView = document.querySelector('.video-feature-intro  .video-container-preview video');
  const loadingVidAnim =  document.querySelector('.video-feature-intro  .video-container-preview .loading-spinner-animation');
  const playVid = document.querySelectorAll('.video-feature-intro .video-prev-controls button')[0];
  const muteVid = document.querySelectorAll('.video-feature-intro .video-prev-controls button')[1];

  const landQuotes = [
    "Land: the timeless companion that grows with you and for you.",
    "To be rooted is perhaps the most important and least recognized need of the human soul.",
    "The best investment on Earth is earth.",
    "Land really is the best art.",
    "Land is not merely soil; it is a fountain of energy flowing through a circuit of life.",
    "The best investment on Earth is Earth itself.",
    "Owning land is about owning a piece of history and a promise of the future.",
    "They aren’t making more land; treasure every acre you have.",
    "A plot of land is a blank canvas for dreams yet to unfold.",
    "To own land is to own a portion of the world's beauty.",
    "Land connects us to our roots and secures our future.",
    "Your land today, their legacy tomorrow.",
    "In every acre lies infinite possibilities.",
    "Every inch of land tells a story waiting to be written.",
    "Invest in land, it’s the one thing they’re not making any more of.",
    "Land is the foundation of every great dream.",
    "A piece of land is a timeless treasure that appreciates with every sunrise."
];

  playVid.onclick = function () {
    isPlayingVid = !isPlayingVid;

   if(isPlayingVid) {
      videoView.play();
      playVid.innerHTML = '<i class="fas fa-pause"></i>';

   }
   else {
      videoView.pause();
      playVid.innerHTML = '<i class="fas fa-play"></i>';
   }

   showLandQuotes();
  }

  muteVid.onclick = function () {
    isMuted = !isMuted;

    videoView.muted = isMuted;

    muteVid.innerHTML =  isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>'
  }

  function showwaitingVideoMetadata(state) {
      videoView.classList.toggle("blur", state);
      loadingVidAnim.style.display = state ? "flex" : "none";
  }

  videoView.addEventListener('stalled', function () {
    showwaitingVideoMetadata(true);
  });

  videoView.addEventListener('playing', function () {
    showwaitingVideoMetadata(false);
  });

    videoView.addEventListener('ended', function () {
      isPlayingVid = false;
      playVid.innerHTML = '<i class="fas fa-play"></i>';
      showwaitingVideoMetadata(false);
      
      // You can add any action you want here, like showing a replay button or resetting the video.
  });

  videoView.addEventListener('waiting', function () {
    console.log("Video is buffering...");
    // You could show a buffering animation here.
    showwaitingVideoMetadata(true);
  });

  videoView.addEventListener('error', function () {
    console.log("Error occurred while loading or playing the video.");
    showwaitingVideoMetadata(true); // Show error message or retry option
  });

  videoView.addEventListener('suspend', function () {
    console.log("Video suspend triggered (stopped fetching media).");
    showwaitingVideoMetadata(true); // You can show a 'loading' spinner or error message
  });

  videoView.addEventListener('loadeddata', function () {
    
    showwaitingVideoMetadata(false); // You can show a 'loading' spinner or error message
});

videoView.addEventListener('loadedmetadata', function () {
  console.log("Video metadata loaded.");
  showwaitingVideoMetadata(false); // Video data loaded, no need for loading spinner
});


videoView.addEventListener('canplaythrough', function () {
  showwaitingVideoMetadata(false); // You can show a 'loading' spinner or error message
});

videoView.addEventListener('canplay', function () {
  showwaitingVideoMetadata(false); // You can show a 'loading' spinner or error message
});

videoView.addEventListener('pause', function () {
  showwaitingVideoMetadata(false); // You can show a 'loading' spinner or error message
});

function showLandQuotes() {
  let currentIndex = 0;

  intervals = setInterval(function () {
                quoteArea.textContent = landQuotes[currentIndex];
                currentIndex = (currentIndex + 1) % landQuotes.length;
  },15000);
}

});
