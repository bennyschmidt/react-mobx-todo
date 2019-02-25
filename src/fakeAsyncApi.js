/*
 * Fake Async API
 */

const MAX_DELAY = 500;
const MIN_DELAY = 50;

const DATA = [];

const _fakeAsyncDelay = () => {
  return new Promise(resolve => setTimeout(resolve, (Math.floor(Math.random() * MAX_DELAY) + MIN_DELAY)));
};

export const api = {
  delete: async (url, req) => {
    await _fakeAsyncDelay();
    switch (url) {
      case '/todos':
        for(let i = 0; i < DATA.length; i++) {
          if (DATA[i].id === req) {
            DATA.splice(i, 1);
            break;
          }
        }
        return {
          statusCode: 200,
          error: false,
          data: DATA
        };
      default:
        return {
          statusCode: 404,
          error: { message: 'DELETE endpoint "todos" does not exist.' }
        };
    }
  },
  get: async (url) => {
    await _fakeAsyncDelay();
    switch (url) {
      case '/todos':
        return {
          statusCode: 200,
          error: false,
          data: DATA
        };
      default:
        return {
          statusCode: 404,
          error: { message: 'GET endpoint "todos" does not exist.' }
        };
    }
  },
  put: async (url, req) => {
    await _fakeAsyncDelay();
    switch (url) {
      case '/todos':
        let ids, isPatch = false;
        for(let i = 0; i < DATA.length; i++) {
          if (DATA[i].id === req.id) {
            isPatch = true;
            DATA[i] = { completed: req.completed, id: req.id, text: req.text };
            break;
          }
        }
        if (!isPatch) {
          ids = (DATA.length < 1 ? [-1] : DATA.map((d) => d.id).sort((a, b) => a.id - b.id));
          DATA.push(Object.assign(req, { id: (ids[ids.length - 1] + 1), text: req.text }));
        }
        return {
          statusCode: 200,
          error: false,
          data: DATA
        };
      default:
        return {
          statusCode: 404,
          error: { message: 'PUT endpoint "todos" does not exist.' }
        };
    }
  }
};
