import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display the unfavorite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    // Wait for the element to appear in the DOM
    await new Promise(resolve => setTimeout(resolve, 500)); // Waiting for 0.5 seconds as an example

    const unfavoriteButton = document.querySelector('[aria-label="unfavorite this restaurant"]');
    expect(unfavoriteButton).toBeTruthy();
  });

  it('should not display the favorite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    // Wait for the element to appear in the DOM
    await new Promise(resolve => setTimeout(resolve, 500)); // Waiting for 0.5 seconds as an example

    const favoriteButton = document.querySelector('[aria-label="favorite this restaurant"]');
    expect(favoriteButton).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    // Wait for the element to appear in the DOM
    await new Promise(resolve => setTimeout(resolve, 500)); // Waiting for 0.5 seconds as an example

    const unfavoriteButton = document.querySelector('[aria-label="unfavorite this restaurant"]');
    if (unfavoriteButton) {
      unfavoriteButton.dispatchEvent(new Event('click'));
    }
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait for asynchronous process to complete

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonInitiatorWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // Wait for the element to appear in the DOM
    await new Promise(resolve => setTimeout(resolve, 500)); // Waiting for 0.5 seconds as an example

    const unfavoriteButton = document.querySelector('[aria-label="unfavorite this restaurant"]');
    if (unfavoriteButton) {
      unfavoriteButton.dispatchEvent(new Event('click'));
    }
    await new Promise(resolve => setTimeout(resolve, 500)); // Wait for asynchronous process to complete

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(restaurants).toEqual([]);
  });
});
