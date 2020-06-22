import mockAxios from './axios'
import getProductos from '../Api';

test('Llamada para obtener data desde api NetCore 2.1', async () => {
    mockAxios.get.mockImplementationOnce(() => {
        Promise.resolve({
            data: {}
        })
    });
    try {
        let data = await getProductos('2').then(data => expect(data)).catch(data => expect(data))
        console.log(data)
    } catch (e) {
        console.log(e)
    }
});

test('Obtencionde data erronea desde la API', async () => {
    const errorMessage = 'Network Error';
    mockAxios.get.mockImplementationOnce(() =>
        Promise.reject(new Error(errorMessage)),
    );
});











// jest.mock('axios');

// describe('fetchData', () => {
//     it('fetches successfully data from an API', async () => {
//         const data = {
//             data: {
//                 hits: [
//                     {
//                         objectID: '1',
//                         title: 'a',
//                     },
//                     {
//                         objectID: '2',
//                         title: 'b',
//                     },
//                 ],
//             },
//         };

//         axios.get.mockImplementationOnce(() => Promise.resolve(data));
//     });

//     it('fetches erroneously data from an API', async () => {
//         const errorMessage = 'Network Error';

//         axios.get.mockImplementationOnce(() =>
//             Promise.reject(new Error(errorMessage)),
//         );
//     });
// });