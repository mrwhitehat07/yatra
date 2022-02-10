export default function ProfileForm () {
    return (
        <div className="container d-flex flex-row justify-content-center align-center">
            <form>
                <div className="mb3 align-center">
                    <div class="image-input image-input-empty" data-kt-image-input="true">
                        <div class="image-input-wrapper w-125px h-125px"></div>
                        <img
                            src="https://res.cloudinary.com/dvcudli4n/image/upload/v1643983733/yw3g8ejatc11zbh6c1cy.jpg"
                            className="rounded-circle mt-5"
                            height="80"
                            alt=""
                            loading="lazy"
                        />
                        <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                            data-kt-image-input-action="change"
                            data-bs-toggle="tooltip"
                            data-bs-dismiss="click"
                            title="Change avatar">
                            <i class="bi bi-pencil-fill fs-7"></i>
                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Bio</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}