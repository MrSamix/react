import { Navigate } from "react-router-dom";

function Profile({enabled=true}) {
  return (
    <div>
      {!enabled && <Navigate to="/" />}
      <h2>Profile page</h2>
      <p>This is the profile page. You can view and edit your profile information here.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <h3>Enabled: {enabled.toString()}</h3>
    </div>
  )
}

export default Profile