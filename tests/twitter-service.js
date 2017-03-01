/**
 * Created by fear on 28-02-17.
 */
/* global describe, it*/
import chai from 'chai';
import twitterService from '../services/twitter';

const assert = chai.assert;

describe('Api de consumo de twitter', () => {
  describe('Búsqueda por tag', () => {
    it('Debe retornar datos con el tag nodejs', (done) => {
      twitterService.searchByTag('nodejs')
        .then((data) => {
          data.statuses.forEach((status) => {
            assert.include(status.text.toLowerCase(),
              'nodejs',
              'El texto del mensaje contiene la palabra nodejs');
          });
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

    it('Debe retornar la cantidad de datos solicitada', (done) => {
      twitterService.searchByTag('nodejs', 2)
        .then((data) => {
          const totalDeDatosDevueltos = data.search_metadata.count;
          assert.equal(totalDeDatosDevueltos, 2, 'Debe retornar dos datos');
          done();
        })
        .catch((err) => {
          done(err);
        });
    });

  });
});
