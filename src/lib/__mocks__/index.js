export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve({user:{}}));// why like there
export const createUser = jest.fn(() => Promise.resolve({})); // similar en sus parametos en su retorno al alias de  createUser
export const singUser = jest.fn(() => Promise.resolve({})); // similar en sus parametos en su retorno al alias de  createUser 
export const auth = jest.fn(() => Promise.resolve({}));
export const singUserGoogle = jest.fn(() => Promise.resolve({}));
export const signInWithPopup = jest.fn(() => Promise.resolve({}));
export const GoogleAuthProvider = jest.fn(() => Promise.resolve({}));
export const loginOut= jest.fn(() => Promise.resolve({}));


export const readPost  = jest.fn((callback) => {
    callback([{
        id: 'nepgelgmp',
        data: () => ({
            id: 'ferfregbrt', email: 'alissonredondo@example.com', post: 'Hola',
        }),
    }]);
});