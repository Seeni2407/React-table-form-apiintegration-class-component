function Form()
{
    return(
        <form action="" id="content">
            <label htmlFor="FN" className="fm" id="TOP">First Name</label>
            <input type="text" className="in" name="" id="FN" />
            <br />
            <br />
            <label htmlFor="LN" className="fm">Last Name</label>
            <input type="text"  className="in" name="" id="LN" />
            <br />
            <br />
            <label htmlFor="EI"className="fm">Email ID</label>
            <input type="email"  className="in" name="" id="EI" />
            <br /><br />
            <label htmlFor="MB" className="fm">Mobile Number</label>
            <input type="Number"  className="in" name="" id="MB" />
            <br />
            <br />
            <label htmlFor="GD" className="fm">Gender</label>
            <input type="radio"  className="in" name="GD" id="GD" values="Male"/>Male
            <input type="radio" name="GD" id="" values="Female"/>Female
            <br /><br />
            <label htmlFor="DB" className="fm">Date of Birth</label>
            <input type="date" className="in"  name="" id="DB" />
            <br /><br />
            <label htmlFor="AD" className="fm">Address</label>
            <textarea name="" id="AD" cols="30" rows="10"></textarea>
            <br />
            <br />
            <label htmlFor="CT" className="fm">City</label>
            <input type="text" className="in" name="" id="CT" />
            <br />
            <br />
            <label htmlFor="PN"className="fm">pin code</label>
            <input type="text" className="in" name="" id="PN" />
            <br /><br />
            <label htmlFor="ST" className="fm">State</label>
            <input type="text" className="in" name="" id="ST" />
            <br />
            <br />
            <label htmlFor="CU" className="fm">Cuntry</label>
            <input type="text" className="in" name="" id="CU" />
            <br />

            <br />
            <label htmlFor="HB" className="fm">Hobbies</label>
            <input type="checkbox" className="in" name="" id="DRA" values="Drawing"/>Drawing
            <input type="checkbox" name="" id="" values="Singing"/>Singing
            <input type="checkbox" name="" id="" values="Dancing"/>Dancing
            <input type="checkbox" name="" id="" values="Sketching"/>Sketching
            <br />
            <input type="checkbox" name="" id="Other" />Others
            <input type="text" />
            <br />
            <br />
            <label htmlFor="QF" className="fm">Qulafication</label>
            <input type="checkbox" className="in" name="" id="HSD" />High School(10)
            <br />
            <input type="checkbox" className="in" name="" id="HS" />Higher School(12)
            <br />
            <input type="checkbox" className="in" name="" id="HS" />Graduation (Bachulars)
            <br />
            <input type="checkbox" className="in" name="" id="HS" />Post Graduation (Master)
            <br />
            <input type="checkbox" className="in" name="" id="HS" />PHD
            <br />
            <br />
            <label htmlFor="COURSE" className="fm">Course Applyed For</label>
            <input type="checkbox" className="co"  name="" id="BCA" />BCA(Bachular of Cumputer Applications)
            <br />
            <input type="checkbox" className="co" name="" id="" />B.Com(Bachular of Commerce)
            <br />
            <input type="checkbox" className="co" name="" id="" />B.sc(Bachular Of Science)
            <br />
            <input type="checkbox" className="co" name="" id="" />BA(Bachular Of Arts)
            <br />
            <input type="checkbox" className="co" name="" id="" />MCA(Master Of Computer Application)

            <br /><br />
            <input type="submit" id="sub" value="Submit" />
            <input type="submit" id="reset" value="Reset"/>
            
        
        </form>
    )
}

export default Form;