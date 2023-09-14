import { BehaviorSubject, Observable } from "rxjs";

/**
 * A Facade Action describes the structure of messages being sent to the the Facade Service
 */
export interface FacadeAction<ActionTypes>{
  type:ActionTypes;
  payload:any;
}

/**
 * Exclusive way for presenter component to acces the service layer
 */
export interface FacadeService<StateDescription, EnumActionTypes> {
  /**
   * Exposes Application Data State
   */
  state$:Observable<StateDescription>;
  /**
   * Exposes Application Action Stream
   */
  action$:BehaviorSubject<FacadeAction<EnumActionTypes> | null >;
  /**
   * Accepts Action as process entry point
   */
  dispatch( action:FacadeAction<EnumActionTypes> ):any;
}
