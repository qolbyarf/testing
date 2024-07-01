const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant">
    <h2 class="restaurant__name">${restaurant.name}</h2>
    <img class="lazyload" src="https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <h3>Information</h3>
      <h4>Address</h4>
      <p>${restaurant.address || 'Address not available'}</p>
      <h4>City</h4>
      <p>${restaurant.city || 'City not available'}</p>
      <h4>Description</h4>
      <p>${restaurant.description || 'Description not available'}</p>
      <h4>Food Menus</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.foods && restaurant.menus.foods.length > 0
          ? restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')
          : '<li>No foods available</li>'}
      </ul>
      <h4>Drink Menus</h4>
      <ul>
        ${restaurant.menus && restaurant.menus.drinks && restaurant.menus.drinks.length > 0
          ? restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')
          : '<li>No drinks available</li>'}
      </ul>
      <h4>Customer Reviews</h4>
      <ul class="customerReviews">
        ${restaurant.customerReviews && restaurant.customerReviews.length > 0
          ? restaurant.customerReviews.map((review) => `
              <li>
                <p>${review.name || 'Anonymous'}</p>
                <p>${review.review || 'No review available'}</p>
                <p>${review.date || 'Date not available'}</p>
              </li>`).join('')
          : '<li>No reviews available</li>'}
      </ul>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <h2>${restaurant.name}</h2>
    <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name} image">
    <p>${restaurant.description ? restaurant.description.substring(0, 100) + '...' : 'Description not available'}</p>
    <p>Kota: ${restaurant.city || 'City not available'}</p>
    <p>Rating: ${restaurant.rating || 'Not rated'}</p>
    <a href="/#/detail/${restaurant.id}" class="detail-link">View Details</a>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
