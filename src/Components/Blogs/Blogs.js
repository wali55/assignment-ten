import React from 'react';

const Blogs = () => {
    return (
        <div className="vh-100">
            <h2 className="text-center my-5">Blogs</h2>
            <div className="container">
                <div className="mb-5">
                    <h4>(1) Difference between authorization and authentication?</h4>
                    <p>In authentication, the identity of users are checked for providing the access to the system. In authorization, a the person’s authorities are checked for accessing the resources. In authentication, users or persons are verified. In authorization, users or persons are validated. Authentication is done before the authorization process.</p>
                </div>
                <div className="mb-5">
                    <h4>(2) Why use firebase? What are the other options we have beside firebase for authentication?</h4>
                    <p>Firebase helps us to develop high-quality apps, grow our user base, and earn more money.</p>
                    <p>Firebase alternatives for authentication are Auth0, STYTCH, Ory, Supabase, Okta, PingIdentity, Keycloak, Frontegg, Authress.</p>
                </div>
                <div className="mb-5">
                    <h4>(3) What other services firebase provide beside authentication?</h4>
                    <p>1. Cloud Firestore(Build serverless secure at global scale). 2. Realtime Database. 3. Remote Config. 4. Firebase Extensions(Add functionality to our app using pre-packaged bundle of codes). 5. App Check. 6. Cloud Functions. 7. Cloud Messaging 8. Hosting. 9. Cloud Storage. 10. Firebase ML 11. Crashlytics(track, prioritize and fix stability issues in realtime). 12. Google Analytics.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;