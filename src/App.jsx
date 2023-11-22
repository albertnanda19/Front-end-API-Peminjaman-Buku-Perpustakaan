import './App.css';

export default function App() {
  return (
    <div className="flex items-center justify-center w-[550px] h-[700px] bg-white rounded-[30px]">
      <div className="w-full max-w-lg p-10 bg-white">
        <h1 className="text-5xl font-bold text-center mb-6 text-gray-900 font-poppins">Join Now!</h1>
        <p className="text-lg text-center mb-10 text-gray-500 font-fredoka">Jadilah anggota dan meminjam buku dari perpustakaan kami!!</p>

        <div className="mb-6">
          <div className="flex items-center border-2 border-gray-800 bg-gray-500 rounded-lg px-3 py-2">
            <span className="text-gray-400">
            </span>
            <input type="text" id="username" className="w-full pl-2 outline-none bg-gray-500  rounded-lg" placeholder="Nama" />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center border-2 border-gray-800 bg-gray-500 rounded-lg px-3 py-2">
            <span className="text-gray-400">
            </span>
            <input type="text" id="username" className="w-full pl-2 outline-none bg-gray-500 rounded-lg" placeholder="Username" />
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center border-2 border-gray-800 bg-gray-500 rounded-lg px-3 py-2">
            <span className="text-gray-400">
            </span>
            <input type="text" id="username" className="w-full pl-2 outline-none bg-gray-500 rounded-lg" placeholder="E-Mail" />
          </div>
        </div>

        <div className="mb-6">
  <div className="flex items-center border-2 border-gray-800 bg-gray-500 rounded-lg px-3 py-2">
    <input type="password" id="password" className="w-full pl-2 outline-none bg-gray-500 rounded-lg text-white" placeholder="Password" />
  </div>
</div>


        <button className="w-full py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-gray-700 transition-colors">Sign Up</button>

        <p className="mt-6 text-center text-lg font-poppins text-gray-900">
          Sudah punya akun?
          <a href="#" className="text-blue-600 hover:underline font-poppins"> Sign in</a>
        </p>
      </div>
    </div>
  )
}
