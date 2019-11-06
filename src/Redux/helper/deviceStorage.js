export const deviceStorage = {
  async saveKey(key, value) {
    try {
      await window.sessionStorage.setItem(key, value);
    } catch (error) {
      error.response();
      console.log(error);
      console.log(error.response);
    }
  }
};
