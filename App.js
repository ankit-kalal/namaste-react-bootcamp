import React from "react";
import ReactDOM from "react-dom/client";

data = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "64549",
          name: "Mr. Beans",
          cloudinaryImageId: "e5c3ba780acc3e932fc7db7b01e15afb",
          locality: "Saket Nagar",
          areaName: "Old Palasia",
          costForTwo: "₹500 for two",
          cuisines: [
            "Continental",
            "Desserts",
            "Italian",
            "Beverages",
            "Snacks",
          ],
          avgRating: 3.9,
          feeDetails: {
            restaurantId: "64549",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 4000,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 4000,
          },
          parentId: "140112",
          avgRatingString: "3.9",
          totalRatingsString: "500+",
          promoted: true,
          adTrackingId:
            "cid=8436259~p=1~eid=0000018a-b867-84e9-3b8d-f82300ee010f~srvts=1695310906601~83644",
          sla: {
            deliveryTime: 35,
            lastMileTravel: 4.6,
            serviceability: "SERVICEABLE",
            slaString: "35 mins",
            lastMileTravelString: "4.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-21 22:28:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=64549&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "420862",
          name: "La Pino'z Pizza",
          cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
          locality: "Veda Complex",
          areaName: "Bhawar Kuan",
          costForTwo: "₹250 for two",
          cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          avgRating: 3.8,
          veg: true,
          feeDetails: {
            restaurantId: "420862",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "4961",
          avgRatingString: "3.8",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-22 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=420862&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "372625",
          name: "Jai Malhar Sandwich",
          cloudinaryImageId: "97cea2444999ca122df3acc17d0dbb30",
          locality: "Sarafa",
          areaName: "Shiv Vilas Palace",
          costForTwo: "₹200 for two",
          cuisines: ["Continental", "Snacks"],
          avgRating: 4,
          feeDetails: {
            restaurantId: "372625",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2200,
          },
          parentId: "108620",
          avgRatingString: "4.0",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 0.4,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "0.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-21 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=372625&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "551378",
          name: "Pizza Point",
          cloudinaryImageId: "ha8mtnmdzudyjehrw3e4",
          locality: "Sukhadev Nagar",
          areaName: "Sarafa",
          costForTwo: "₹150 for two",
          cuisines: ["Pizzas", "Fast Food"],
          avgRating: 3.8,
          veg: true,
          feeDetails: {
            restaurantId: "551378",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 3300,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 3300,
          },
          parentId: "21909",
          avgRatingString: "3.8",
          totalRatingsString: "50+",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 3.8,
            serviceability: "SERVICEABLE",
            slaString: "28 mins",
            lastMileTravelString: "3.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-22 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=551378&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "70979",
          name: "FOI- Manik bagh",
          cloudinaryImageId: "gbzfvgpuh2wwiwdpzfhg",
          locality: "Palsikar Colony",
          areaName: "Manikbagh",
          costForTwo: "₹200 for two",
          cuisines: ["Chinese", "Beverages", "Italian", "Desserts"],
          avgRating: 3.7,
          veg: true,
          feeDetails: {
            restaurantId: "70979",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2200,
          },
          parentId: "80791",
          avgRatingString: "3.7",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 2.1,
            serviceability: "SERVICEABLE",
            slaString: "23 mins",
            lastMileTravelString: "2.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-21 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=70979&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "70503",
          name: "Naman Namkeen sweets and Bakery",
          cloudinaryImageId: "zcr2oywrvhckdwzyxwof",
          locality: "Netaji Subhash Marg",
          areaName: "Chiman Bagh",
          costForTwo: "₹200 for two",
          cuisines: ["Bakery"],
          avgRating: 3.8,
          veg: true,
          feeDetails: {
            restaurantId: "70503",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2200,
          },
          parentId: "143509",
          avgRatingString: "3.8",
          totalRatingsString: "1K+",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 1.4,
            serviceability: "SERVICEABLE",
            slaString: "19 mins",
            lastMileTravelString: "1.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-21 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=70503&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "447833",
          name: "Pizza Hut",
          cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
          locality: "Treasure Island Mall",
          areaName: "South Tukoganj",
          costForTwo: "₹350 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.7,
          feeDetails: {
            restaurantId: "447833",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2200,
          },
          parentId: "721",
          avgRatingString: "3.7",
          totalRatingsString: "500+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            slaString: "27 mins",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-22 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=447833&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "323015",
          name: "Royal Pizza",
          cloudinaryImageId: "kkeme3cfifz0zzm4uak5",
          locality: "Sarafa",
          areaName: "Sarafa Bazar",
          costForTwo: "₹150 for two",
          cuisines: ["Indian"],
          avgRating: 3.8,
          feeDetails: {
            restaurantId: "323015",
            fees: [
              {
                name: "BASE_DISTANCE",
                fee: 2200,
              },
              {
                name: "BASE_TIME",
              },
              {
                name: "ANCILLARY_SURGE_FEE",
              },
            ],
            totalFee: 2200,
          },
          parentId: "172369",
          avgRatingString: "3.8",
          totalRatingsString: "3",
          sla: {
            deliveryTime: 23,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "23 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2023-09-22 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=323015&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwW7Be8Ci5_dGIO9cUmqsyGJ_dAnQpPNNCKBNREu6HdDvy2-rg7GKO5YH0ex7uiqD-bkQ&usqp=CAU"
      />
      <div className="nav-item">
        <ul className="">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  areaName,
  avgRating,
  cuisines,
}) => {
  return (
    <div className="card">
      <img
        className="logo"
        alt="logo"
        style={{ width: "200px", height: "200px" }}
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{avgRating} Rating</h3>
      <h3>
        {cuisines[0]},{cuisines[1]}
      </h3>
      <h4>{areaName}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {data.map((restaurant) => {
        return <RestaurantCard {...restaurant.card.card.info} key={restaurant.card.card.info.id} />;
      })}
    </div>
  );
};

const APP = () => (
  <div>
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<APP />);
