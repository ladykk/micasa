import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//import pictures
import avatar_icon from "../assets/icons/userform/avatar.png";
import name_icon from "../assets/icons/userform/id-card.png";
import user_icon from "../assets/icons/userform/user.png";
import password_icon from "../assets/icons/userform/key.png";
import email_icon from "../assets/icons/userform/email.png";
import phone_icon from "../assets/icons/userform/phone-call.png";

const SignUpPage = () => {
  const history = useHistory();
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    password: "",
    confirm_password: "",
    email: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);

  //avatar
  const avatar_file = React.createRef();
  const removerAvatar = () => {
    avatar_file.current.value = "";
    setForm({ ...form, avatar_file: null });
    setPreview(null);
  };

  const handleChange = ({ target }) => {
    setErrors({ ...errors, [target.name]: "" });
    switch (target.name) {
      case "avatar_file":
        const file = target.files[0];
        switch (file.type) {
          case "image/jpg":
          case "image/jpeg":
          case "image/png":
            setPreview(URL.createObjectURL(file));
            setForm({
              ...form,
              [target.name]: file,
            });
            break;
          default:
            setErrors({
              ...errors,
              [target.name]: "File type is not supported.",
            });
        }
        break;
      case "confirm_password":
        if (target.value === form.password) {
          setErrors({ ...errors, confirm_password: null });
        } else if (target.value.length === 0) {
          setErrors({ ...errors, confirm_password: null });
        } else {
          setErrors({ ...errors, confirm_password: "Password not matched." });
        }
      default:
        setForm({ ...form, [target.name]: target.value });
    }
  };

  return (
    <div className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 pt-12 background-2 bg-black text-white">
      <div className="w-4/5 h-full mx-auto relative flex">
        <div class=" w-1/3 flex flex-col justify-center flex-shrink-0 flex-grow-0 mr-48">
          <div className="w-full flex items-end justify-between mb-4">
            <h1 className="text-4xl">At Mi Casa,</h1>
            <p className="text-xl">
              <span className="text-red-600 font-normal">10,000+</span>{" "}
              properties
            </p>
          </div>
          <p className="text-xl text-justify mb-4">
            We try our best to introduce you a dreamy property that suit to your
            need. Saving your time, stress, and money.
          </p>
          <Link
            to="/about"
            className="text-lg text-gray-400 font-normal underline"
          >
            Learn more...
          </Link>
        </div>
        <form class="w-full h-auto bg-black bg-opacity-60 rounded-xl p-7 mt-12 mb-12">
          <h1 className="text-center text-5xl font-semibold mt-5 mb-10">
            Sign Up
          </h1>
          <div className="flex">
            <div className="w-2/5 h/full p-2 flex flex-col items-center">
              <input
                type="file"
                id="avatar_file"
                name="avatar_file"
                onChange={handleChange}
                ref={avatar_file}
                className="hidden"
              />
              <div className="relative w-28 h-28 mb-8 mt-4">
                <img
                  src={preview ? preview : avatar_icon}
                  alt=""
                  className="w-full h-full rounded-full"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (preview) {
                      removerAvatar();
                    } else {
                      avatar_file.current.click();
                    }
                  }}
                  className={`z-50 absolute top-1/2 left-1/2 transform-center w-8 h-8 flex items-center justify-center rounded-full font-normal text-xl ${
                    preview
                      ? "trans-hover  bg-red-500"
                      : "bg-opacity-90 hover:bg-opacity-80 ease-in duration-75 bg-blue-500"
                  }`}
                >
                  {preview ? "-" : "+"}
                </button>
              </div>

              <p>File Supported: .jpg, .png</p>

              <p className="text-red-500">{errors.avatar_file}</p>
            </div>
            <div className=" w-3/5 h/full p-2 text-black">
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={name_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  required
                  onChange={handleChange}
                  value={form.full_name}
                  placeholder="Name"
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">{errors.full_name}</p>
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={user_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={handleChange}
                  value={form.username}
                  placeholder="Username"
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">{errors.username}</p>
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={password_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={handleChange}
                  value={form.password}
                  placeholder="Password"
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">{errors.password}</p>
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={password_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  required
                  onChange={handleChange}
                  value={form.confirm_password}
                  placeholder="Confirm Password"
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">
                {errors.confirm_password}
              </p>
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={email_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  onChange={handleChange}
                  value={form.email}
                  placeholder="Email"
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">{errors.email}</p>
              <div class="w-full h-10 mb-3 bg-white p-2 rounded-lg flex items-center shadow-md ">
                <img src={phone_icon} alt="" className="h-6 w-auto mr-2" />
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  required
                  onChange={handleChange}
                  value={form.phone_number}
                  placeholder="Phone number"
                  pattern="((\+66|0)(\d{1,2}\-?\d{3}\-?\d{3,4}))|((\+๖๖|๐)([๐-๙]{1,2}\-?[๐-๙]{3}\-?[๐-๙]{3,4}))"
                  gm
                  className="w-full focus:outline-none h-full"
                />
              </div>
              <p className="text-red-500 mt-1 mb-2">{errors.phone_number}</p>
              <div className="flex items-center pt-1">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  className=" w-4 h-4 mr-2"
                  required
                />
                <p className="text-white inline-block">
                  I agree to the processing of my personal data.
                </p>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full h-10 mt-7 rounded-xl text-white bg-blue-500 text-lg font-normal align-middle hover:bg-opacity-90 ease-in duration-75"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;