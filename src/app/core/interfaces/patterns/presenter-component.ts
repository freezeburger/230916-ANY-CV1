import { FacadeService } from "./facade-service";

export interface PresenterComponent<State,Action> {
  presenter:FacadeService<State,Action>
}
