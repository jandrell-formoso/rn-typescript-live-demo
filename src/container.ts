import { getTodo } from "./actions/todoActions";

// AppContainer for react redux connect
export const mapStateToProps = state => ({
  // add props that will be used globally.
  // or that will be called right after opening the app.
});

export const mapDispatchToProps = {
  // add actions here.
  getTodo,
};
