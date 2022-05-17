
import React from 'react'

const Profile = () => {
    return (
        <div className="row">
            <h2> profile </h2>
            <div className="col s6 offset-s3">
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
            <div className="col s6 offset-s3">
                <div className="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s6 offset-s3">
              <h2> TODO! </h2> 
            </div>
        </div>

    )
}
export default Profile; 