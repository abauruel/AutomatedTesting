import { runSaga } from "redux-saga";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

import { getRepositories } from "../../store/sagas/repositories";

import api from "../../services/api";

import MockApapter from "axios-mock-adapter";

const apiMock = new MockApapter(api);

describe("Repositories Saga", () => {
  it("should be able to fecth repositories", async () => {
    const dispatched = [];

    apiMock.onGet("users/abauruel/repos").reply(200, ["Repo 1", "Repo 2"]);

    await runSaga(
      {
        dispatch: action => {
          dispatched.push(action);
        }
      },
      getRepositories
    ).toPromise();

    expect(dispatched).toContainEqual(
      RepositoriesActions.getSuccess(["Repo 1", "Repo 2"])
    );
  });
});
