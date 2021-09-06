// Este sera nuestro almacenamiento central
export const state = () => ({
  _darkMode: false
});

//Getters
// Normalmente se llaman desde las propiedades computed de los componentes
export const getters = {
  getCounter(state) {
    return state._counter;
  }
};

//Actions
// Estas acciones o metodos sirven para llamar a las mutaciones
//A diferencia de las mutaciones pueden ser asincronas (llamadas a las APIs)
//Pueden contener algo de logica de negocio y ademas pueden llamar a varias mutaciones
export const actions = {
  /**
   * Esta funcion se ejecuta al inicializarse la App
   * @param {*} vuexContext commit, dispatch, state
   * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app, $axios, env, store
   */
  async nuxtServerInit({ dispatch }, context) {
    await dispatch("posts/loadPosts");
    await dispatch("projects/loadProjects");
  },

  darkMode({ commit }) {
    commit("enableDarkMode");
  }
};

//Mutadores
//El unico fin de los mutadores es mutar o modificar el state o almacenamiento
export const mutations = {
  enableDarkMode(state) {
    state._darkMode = !state._darkMode;
    if (state._darkMode) {
      document.body.classList.add("bg-gradient-to-br");
      document.body.classList.add("from-[#ccc]");
      document.body.classList.add("via-[#36414e]");
      document.body.classList.add("to-[#ccc]");
    } else {
      document.body.classList.remove("lightmode");
    }
    console.log(state._darkMode);
  }
};
