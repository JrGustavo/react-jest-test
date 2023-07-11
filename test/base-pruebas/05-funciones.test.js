import {getUser} from 'src/base-pruebas/05-funciones.js'

describe('Pruebas en 05 funciones', function () {

    test('getUser debe retornar',() => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_papi1502'
        };

        const user = getUser();

        expect(testUser).toBe(user);

    });
    
});