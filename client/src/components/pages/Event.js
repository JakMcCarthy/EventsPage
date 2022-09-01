import AddEvent from '../AddEvent/AddEvent';
import auth from '../../utils/auth';


export default function Event() {
    let display = <AddEvent/>
  if (!auth.loggedIn()){
    display = <h1>Please log in before adding events</h1>
  }
  return (
    <>
      <h1>Create Event</h1>
      {display}
    </>
  );
}
