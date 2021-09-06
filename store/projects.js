// State
export const state = () => ({
  _projects: []
});

// Actions
export const actions = {
  async loadProjects({ commit }) {
    // Obtener los posts
    let { data } = await this.$axios.get(
      "https://mydevsearch.herokuapp.com/api/projects/"
    );
    let myprojects = data.filter(
      data => data.owner.name === "Rafael Valenzuela"
    );
    console.log(myprojects);

    // Realizar un commit
    commit("setProjects", myprojects);
  }
};

// Getters
export const getters = {
  getProjects(state) {
    return state._projects;
  }
};

// Mutation
export const mutations = {
  setProjects(state, projects) {
    state._projects = projects;
  }
};
