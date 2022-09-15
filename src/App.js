import React, { useState } from "react";
import "./styles.css";

const FoodDB = {
  India: [
    {
      name: "Masala dosa",
      image:
        "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__700_0_0_0_auto.jpg",
      description:
        "Arguably South India’s most renowned culinary export, masala dosas are famous the world over. A sort of Indian pancake, dosas are made from a thin batter consisting of rice, flour and lentils.",
      ratings: "4.5/5"
    },
    {
      name: "Chaat",
      image:
        "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/swetha-nani20160627194248464.jpeg",
      description:
        "the original chaat is a wonderful combination of diced potato pieces, crispy fried bread and chickpeas garnished with fresh coriander leaves, yoghurt and dried ginger and tamarind sauce.",
      ratings: "4/5"
    },
    {
      name: "Dal makhani",
      image:
        "https://www.jacadatravel.com/wp-content/uploads/fly-images/316520/iStock-530506394-552x310-cc.jpg",
      description:
        "Dal is the Hindi word for lentils, and this soup-like delicacy is made by stewing small black lentils for hours on end. Whilst there are  many different varieties of this lentil dish, dal makhani is in a league of its own.",
      ratings: "4.5/5"
    },
    {
      name: "Vada pav",
      image:
        "https://www.jacadatravel.com/wp-content/uploads/fly-images/316521/iStock-1157170530-552x310-cc.jpg",
      description:
        "vada pav is as close as Indian cuisine gets to veggie burgers. One for carb lovers, vada pav consists of a deep fried potato dumpling placed neatly inside a small bun. ",
      ratings: "4.8/5"
    },
    {
      name: "Idli",
      image:
        "https://www.jacadatravel.com/wp-content/uploads/fly-images/316526/iStock-1024549286-552x310-cc.jpg",
      description:
        " idli are a type of light savoury rice cake. Made by steaming a batter consisting of fermented black lentils and rice, these rice cakes are dangerously easy to eat. ",
      ratings: "5/5"
    }
  ],
  France: [
    {
      name: "POTATOES DAUPHINOISE",
      image:
        "https://www.oliviascuisine.com/wp-content/uploads/2016/07/Christmas-Sides-590.jpg",
      description:
        "Out of all the ways to cook potato, this is one of the best. Potato + cream + cheese with a hint of garlic and thyme. Seriously, what could be better than that? ",
      ratings: "4.5/5"
    },
    {
      name: "CASSOULET",
      image:
        "https://www.oliviascuisine.com/wp-content/uploads/2016/07/cassoulet-6354-December-02-2015-5.jpg",
      description:
        "Susan, from The View From Great Island, took Cassoulet back to its simpler roots in an easy recipe that can be made from start to finish in an hour. So no more excuses not to make this classic French casserole!",
      ratings: "4/5"
    },
    {
      name: " CHICKEN CORDON BLEU",
      image:
        "https://www.oliviascuisine.com/wp-content/uploads/2016/07/Baked-Chicken-Cordon-Bleu-with-Maple-Dijon1-682x1024.jpg",
      description:
        "All the flavor and sophistication from a classic Chicken Cordon Bleu in a healthier baked version. I’m drooling just by thinking of it!",
      ratings: "4/5"
    },
    {
      name: " CROQUE MONSIEUR",
      image:
        "https://www.oliviascuisine.com/wp-content/uploads/2014/07/croquemonsieur8-682x1024.jpg",
      description:
        "The world’s finest sandwich is nothing more than a grilled ham and cheese. What makes it so special? Velvety béchamel sauce oozing out all over the place. It is mind blowing, really!",
      ratings: "4.5/5"
    },
    {
      name: "CROQUE MADAME",
      image:
        "https://www.oliviascuisine.com/wp-content/uploads/2016/07/Croque-Madame-Final-Whole4.jpg",
      description:
        "What if we could take a Croque Monsieur and add a fried egg on top? We can! And that is called Croque Madame. ",
      ratings: "4/5"
    }
  ],
  Italy: [
    {
      name: "Spaghetti alla Carbonara",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2021/09/Spaghetti-alla-Carbonara-1024x684.jpg?imwidth=1080",
      description:
        "Standing tall at the first position in the list of Italian foods that you must try is Spaghetti alla Carbonara",
      ratings: "5/5"
    },
    {
      name: "Napoletana Pizza ",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2021/09/Napoletana-Pizza--1024x682.jpg?imwidth=1080",
      description:
        "An iconic dish in Naples is its Napoletana Pizza that will make you forget your favourite pizza chain back at home",
      ratings: "4.8/5"
    },
    {
      name: " Risotto",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2021/09/Risotto--1024x680.jpg?imwidth=1080",
      description:
        "One of the most popular Italian dishes across the globe is the Risotto. While some argue that bread is preferred by Italians over any other form of carbs but a creamy risotto is what wins heart in the country!",
      ratings: "4.5/5"
    },
    {
      name: " Polenta",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2021/09/Polenta--1024x665.jpg?imwidth=1080",
      description:
        "A north Italian delicacy that the locals tend to enjoy on a regular basis is the Polenta. It is basically a corn mush that pairs well with meats, salads, and zuppa (soup).",
      ratings: "4.7/5"
    },
    {
      name: "Lasagne",
      image:
        "https://img.veenaworld.com/wp-content/uploads/2021/09/Lasagne--1024x683.jpg?imwidth=1080",
      description:
        "A native would always prefer Parmigiano Reggiano sprinkled on top of Lasagne because mozzarella doesn’t bring about a tangy flavour. Once you try out this dish in Italy, there is no going back.",
      ratings: "4/5"
    }
  ],
  Spain: [
    {
      name: "Gazpacho",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmorejo-0aacf51.jpg?quality=90&webp=true&fit=700,350",
      description:
        "The reddest, ripest tomatoes, olive oil, garlic, bread, peppers and cucumber are blended until silky smooth, then chilled and poured into bowls or glasses. So delicious, so refreshing. ",
      ratings: "4.3/5"
    },
    {
      name: "Paella",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/paella-main-28979d0.jpg?quality=90&webp=true&fit=700,350",
      description:
        "ideally the bomba or Calasparra varieties grown on Spain’s east coast, which are particularly good for absorbing all the flavours.",
      ratings: "4.2/5"
    },
    {
      name: "Tortilla Española",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tortilla-6ff8c86.jpg?quality=90&webp=true&fit=700,350",
      description:
        "Eggs, potatoes, onions… that’s it – and some purists even consider that adding onion is a gastronomic crime of the highest order. The Spanish omelette is so much more than the sum of its parts",
      ratings: "4.7/5"
    },
    {
      name: "Gambas al ajillo",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gambas-1419c7f.jpg?quality=90&webp=true&fit=700,350",
      description:
        "You walk into a tapas bar, the barman is handing a customer an earthenware dish of sizzling prawns, the tantalising aroma hits your nostrils and you just have to order some too.",
      ratings: "4.7/5"
    },
    {
      name: "Patatas bravas",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/potatoe_bravas_20923-f9d2238.jpg?quality=90&webp=true&fit=700,350",
      description:
        "Perhaps the most ubiquitous of tapas, patatas bravas vary quite a bit around the country, but all versions involve chunks of fried potato. ",
      ratings: "4/5"
    }
  ],
  Germany: [
    {
      name: "Maultaschen",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190715175625-04-germany-dishes-gallery.jpg",
      description:
        "Maultaschen from Swabia are a lot like ravioli but bigger. They are typically palm-sized, square pockets of dough with fillings that run the gamut from savory to sweet and meaty to vegetarian.",
      ratings: "4/5"
    },
    {
      name: "Schnitzel",
      image:
        "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F190715175204-01-germany-dishes-gallery.jpg",
      description:
        "Germans love to ladle a variety of sauces over their schnitzel. Jägerschnitzel comes with mushroom sauce, zigeunerschnitzel with bell pepper sauce and rahmschnitzel is served with a creamy sauce.",
      ratings: "4.8/5"
    },
    {
      name: "Käsespätzle",
      image:
        "https://www.expatica.com/app/uploads/sites/6/2014/05/kasespatzle-bowl.jpg",
      description:
        "Germany’s answer to pasta, Spätzle is especially popular in the south of the country. These soft egg noodles are made from wheat flour and egg and are often topped with cheese ",
      ratings: "4.2/5"
    },
    {
      name: "Sauerbraten",
      image:
        "https://www.expatica.com/app/uploads/sites/6/2014/05/sauerbraten.jpg",
      description:
        "Germans love their meat dishes, and Sauerbraten (meaning ‘sour’ or ‘pickled’ roast) is one of the country’s national dishes.",
      ratings: "4.6/5"
    },
    {
      name: "Kartoffelpuffer",
      image:
        "https://www.expatica.com/app/uploads/sites/6/2014/05/kartoffelpuffer.jpg",
      description:
        "Kartoffelpuffer are shallow pan-fried pancakes made from grated or ground potatoes mixed with flour, egg, onion, and seasoning.",
      ratings: "4/5"
    }
  ]
};

function App() {
  const [country, setcountry] = useState("India");

  function ClickHandler(country) {
    setcountry(country);
  }
  return (
    <div>
      <div className="header">
        <h1>🍔 Food Mania 🍔</h1>
        <h2> 5 Foods you must try in Each Country</h2>
      </div>
      <img
        className="image"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uhvq0go5ifnoxyaew1b7"
        alt=""
      />

      <div className="button_container">
        {Object.keys(FoodDB).map((country) => (
          <button
            key={country}
            className="button"
            onClick={() => ClickHandler(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {FoodDB[country].map((place) => (
        <div className="destination" key={place.name}>
          <img className="destination__image" src={place.image} alt="" />
          <h1 className="destination__name"> {place.name} </h1>
          <div className="destination__info">
            <div>{place.description}</div>
            <div>{place.ratings}</div>
          </div>
        </div>
      ))}
      <div className="footer">
        Created for education purpose using React by
        <span> ❤️❤️ Jangala Nagababu ❤️❤️</span>
      </div>
    </div>
  );
}

export default App;
