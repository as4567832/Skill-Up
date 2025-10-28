function InputField({name,placeholderName,changeHandler,value}){
    return(
        <div className="flex flex-col text-white gap-1">
            <label className="bg-transparent" htmlFor="name">{name} <span className="text-red-600">*</span> </label>
            <input onChange={changeHandler} value={value} placeholder={`${placeholderName}`} className=" border-none bg-[#2C333F] p-3 text-white placeholder-gray-400 rounded-lg" type="text" name="name" />
        </div>
    )
}

export default InputField;