import mockAxios from 'axios';
import CatsStore from './store';


describe("testing store functions", () => {
    const catStore = new CatsStore();

    test('cat api returns results', () => {
      catStore.fetchCats().then(response => {
          expect(response.length).not.toBe(0);
      });
    });

    test('adds a cat to the family', () => {
      const mockCat = {
        breeds: ['bengal'],
        categories: [1],
        id: "MTc5NjYzNA",
        url: "https://cdn2.thecatapi.com/images/MTc5NjYzNA.jpg",
        width: 612
      }

      const familySize = catStore.myFamily.length;

      catStore.addToFamily().then(response => {
        expect(catStore.myFamily.length).toEqual(familySize + 1);
      });
    });

    test('removes a cat to the family', () => {
      const mockCat = {
        breeds: ['bengal'],
        categories: [1],
        id: "MTc5NjYzNA",
        url: "https://cdn2.thecatapi.com/images/MTc5NjYzNA.jpg",
        width: 612
      }

      const familySize = catStore.myFamily.length;

      catStore.removeFromFamily().then(response => {
        expect(catStore.myFamily.length).toEqual(familySize - 1);
      });
    });

    test('returns family', () => {
      const initialFamily = catStore.myFamily;

      catStore.getFamily().then(response => {
        expect(catStore.myFamily).toEqual(initialFamily);
      });
    });
});
