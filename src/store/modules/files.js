import moduleTemplate from './moduleTemplate';
import defaultFile from '../../data/emptyFile';

const module = moduleTemplate();

module.state = {
  ...module.state,
  currentId: null,
};

module.getters = {
  ...module.getters,
  current: state => state.itemMap[state.currentId] || defaultFile(),
};

module.actions = {
  ...module.actions,
  patchCurrent({ getters, commit }, value) {
    commit('patchItem', {
      ...value,
      id: getters.current.id,
    });
  },
};

export default module;
