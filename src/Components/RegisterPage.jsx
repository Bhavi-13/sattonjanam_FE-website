import React, { useState } from "react";
import { Form, Input, Select, Radio, Button, Steps, Alert } from "antd";
import '../scss/RegisterPage.scss'
import TextArea from "antd/es/input/TextArea";

const { Step } = Steps;
const { Option } = Select;

const RegisterPage = () => {

  const [alertData, setAlertData] = useState({
    type: "",
    message: "",
    show: false,
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [profileDetails, setProfileDetails] = useState({
    registeredFor: "",
    name: "",
    religion: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    age: "",
    caste: "",
    subCaste: "",
    gotra: "",
    hobbies: "",
    height: "",
    color: "",
    createProfileFor: "",
    motherTongue: "",
    maritalStatus: "",
    manglik: "",
    smoking: "",
    drinking: ""
  });
  const [careerDetails, setCareerDetails] = useState({
    country: "",
    state: "",
    city: "",
    pinCode: "",
    highestDegree: "",
    employedIn: "",
    occupation : "",
    business: "",
    job: "",
    annualIncome: "",
    mySelf: ""
  })
  const [familyDetails, setFamilyDetails] = useState({
    familyType: "",
    fatherOccupation: "",
    motherOccupation: "",
    brother: "",
    sister: "",
    familyLivingIn: "",
    contactAddress: "",
    aboutFamily: ""
  })

  const allIndiaStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const steps = [
    {
      title: "Profile Details",
      content: (
        <Form>
            <Form.Item label="Registered for" htmlFor="registeredFor">
            <Select
              name="registeredFor"
              id="registeredFor"
              placeholder="Select"
            >
              <Option value="myself">Myself</Option>
              <Option value="son">Son</Option>
              <Option value="daughter">Daughter</Option>
              <Option value="sister">Sister</Option>
              <Option value="brother">Brother</Option>
              <Option value="relative">Relative</Option>
              <Option value="friend">Friend</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Name" htmlFor="name" >
            <Input
              type="text"
              name="name"
              id="name"
              required
            />
          </Form.Item>
          <Form.Item label="Religion" htmlFor="religion">
            <Select
              name="religion"
              id="religion"
              placeholder="Select Your Religion"
            >
              <Option value="hindu">Hindu</Option>
              <Option value="muslim">Muslim</Option>
              <Option value="christian">Christian</Option>
              <Option value="sikh">Sikh</Option>
              <Option value="parsi">Parsi</Option>
              <Option value="jain">Jain</Option>
              <Option value="buddhist">Buddhist</Option>
              <Option value="noReligion">No religion</Option>
              <Option value="spiritual">Spiritual</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Gender" htmlFor="gender">
            <Radio.Group name="gender" id="gender">
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
              <Radio value="other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Email" htmlFor="email" >
            <Input
              type="email"
              name="email"
              id="email"
              required
            />
          </Form.Item>
          <Form.Item label="Phone Number" htmlFor="phone">
            <Input
              type="number"
              name="phone"
              id="phone"
            
              required
            />
          </Form.Item>
          <Form.Item label="Password" htmlFor="password">
            <Input
              type="password"
              name="password"
              id="password"
              required
            />
          </Form.Item>
          <Form.Item label="Age" htmlFor="age">
            <Input
              type="number"
              name="age"
              id="age"
              required
            />
          </Form.Item>
          <Form.Item label="Caste" htmlFor="caste">
            <Select
              name="caste"
              id="caste"
              placeholder="Select Your Caste"
            >
              <Option value="hindu">Adi Dharmi</Option>
              <Option value="muslim">Adi Andhra</Option>
              <Option value="christian">Adi Dravida</Option>
              <Option value="sikh">Adi Karnataka</Option>
              <Option value="parsi">Agamudayar</Option>
              <Option value="jain">Agri</Option>
              <Option value="buddhist">Ahir</Option>
              <Option value="noReligion">Ahir-Ahir shimpi</Option>
              <Option value="spiritual">Ahirwar</Option>
              <Option value="ambalavasi">Ambalavasi</Option>
              <Option value="amb-pisha">Ambalavasi-pisharody</Option>
              <Option value="amb-pod">Ambalavasi-Poduval</Option>
              <Option value="ammaKodava">Amma Kodava</Option>
              <Option value="arakh">Arakh Arakvanshiya</Option>
              <Option value="arekatica">Arekatica</Option>
              <Option value="arunthathiyar">Arunthathiyar</Option>
              <Option value="arya">Arya Vysya</Option>
              <Option value="ayyaraka">Ayyaraka</Option>
              <Option value="badaga">Badaga</Option>
              <Option value="badhai">Badhai</Option>
              <Option value="badgi">Badgi</Option>
              <Option value="baghel">Baghel Gader</Option>

            </Select>
          </Form.Item>
          <Form.Item label="Sub caste" htmlFor="subCaste" >
            <Input
              type="text"
              name="subCaste"
              id="subCaste"
              required
            />
          </Form.Item>
          <Form.Item label="Gotra" htmlFor="gotra" >
            <Input
              type="text"
              name="gotra"
              id="gotra"
              required
            />
          </Form.Item>
          <Form.Item label="Hobbies" htmlFor="hobbies" >
            <Input
              type="text"
              name="hobbies"
              id="hobbies"
              required
            />
          </Form.Item>
          <Form.Item label="Height" htmlFor="height" >
            <Input
              type="number"
              name="height"
              id="height"
              required
            />
          </Form.Item>
          <Form.Item label="Color" htmlFor="color">
            <Select
              name="color"
              id="color"
              defaultValue="Fair"
            >
              <Option value="">Fair</Option>
              <Option value="veryFair">Very Fair</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Mother Tongue" htmlFor="motherTongue">
            <Select
              name="motherTongue"
              id="motherTongue"
            placeholder="Select Your Mother Tongue"
            >
                <Option value="north">North(Hindi,Punjabi,Himachali,Kashmiri,Sindhi,Urdu)</Option>
                <Option value="west">West(Marathi,Gujarathi,Hindi)</Option>
                <Option value="south">South(Telugu,Tamil,Kannada,Malayalam,Tulu,Urdu)</Option>
                <Option value="east">East(Bengali,Oriya,Assamese,Sikkim/Nepali)</Option>
                <Option value="english">Other(English)</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Create Profile For" htmlFor="createProfileFor">
            <Select
                name="createProfileFor"
                id="createProfileFor"
                defaultValue="Self"
            >
                <Option value="self">Self</Option>
                <Option value="Brother">Brother</Option>
                <Option value="Sister">Sister</Option>
                <Option value="Son">Son</Option>
                <Option value="Daughter">Daughter</Option>
                <Option value="Sibling">Sibling</Option>
                <Option value="Relative">Relative/Friend</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Marital Status" htmlFor="maritalStatus">
            <Select
                name="maritalStatus"
                id="maritalStatus"
                placeholder="Select Your Status"
            >
                <Option value="neverMarried">Never Married</Option>
                <Option value="married">Married</Option>
                <Option value="awaiting">Awaiting Divorce</Option>
                <Option value="divorced">Divorced</Option>
                <Option value="widowed">Widowed</Option>
                <Option value="annulled">Annulled</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Smoking" htmlFor="smoking">
            <Select
                name="smoking"
                id="smoking"
                placeholder="Are you smoking?"
            >
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              
            </Select>
          </Form.Item>
          <Form.Item label="Drinking" htmlFor="drinking">
            <Select
                name="drinking"
                id="drinking"
                placeholder="Are you drinking?"
            >
                <Option value="Yes">Yes</Option>
                <Option value="No">No</Option>
              
            </Select>
          </Form.Item>
        

         
          <Button type="primary" onClick={handleNext}>
            Next
          </Button>
         
        </Form>
      ),
    },
    {
        title: "Career Details",
        content: (
            <Form>
                <Form.Item label="Country" htmlFor="country" >
                    <Input
                    type="text"
                    name="country"
                    id="country"
                    required
                    />
                </Form.Item>
                <Form.Item label="State" htmlFor="state">
                    <Select
                    showSearch
                    name="state"
                    id="state"
                    required
                    placeholder="Select Your State"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    >
                    {allIndiaStates.map((state) => (
                        <Select.Option key={state} value={state}>
                        {state}
                        </Select.Option>
                    ))}
                    </Select>
                </Form.Item>
                <Form.Item label="City" htmlFor="city">
                    <Input
                    type="text"
                    name="city"
                    id="city"
                    required
                    />
                </Form.Item>
                <Form.Item label="Pin Code" htmlFor="pinCode">
                    <Input
                    type="number"
                    name="pinCode"
                    id="pinCode"
                    required
                    />
                </Form.Item>
                <Form.Item label="Highest Degree" htmlFor="highestDegree">
            <Select
              name="highestDegree"
              id="highestDegree"
              placeholder="Select"
            >
              <Option value="engineering">Engineering/Technology/Design</Option>
              <Option value="be">B.E/B.Tech</Option>
              <Option value="bPharmacy">B.Pharmacy</Option>
              <Option value="me">M.E</Option>
              <Option value="mtech">M.Tech</Option>
              <Option value="mPharmacy">M.Pharmacy</Option>
              <Option value="ms">M.S(Engineering,B.Arch,M.Arch,B.Des,M.Des)</Option>
              <Option value="computers">Computers(MCA,BCA,B.IT)</Option>
              <Option value="finance">Finance/Commerce/Economics</Option>
              <Option value="bcom">B.Com</Option>
              <Option value="mcom">M.Com</Option>
              <Option value="ca">CA</Option>
              <Option value="cfa">CFA</Option>
              <Option value="cs">CS</Option>
              <Option value="icwa">ICWA</Option>
              <Option value="management">Management</Option>
              <Option value="mba">MBA/PGDM</Option>
              <Option value="bba">BBA</Option>
              <Option value="phm">PHM</Option>
              <Option value="medicine">Medicine/Health</Option>


            </Select>
          </Form.Item>
          <Form.Item label="Employed In" htmlFor="employedIn">
            <Select
              name="employedIn"
              id="employedIn"
              placeholder="Select"
            >
              <Option value="privateSector">Private Sector</Option>
              <Option value="govtSector">Government Sector</Option>
              <Option value="selfEmployed">Self Employed</Option>
              <Option value="Business">Business</Option>
              <Option value="notWorking">Not Working</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Occupation" htmlFor="occupation">
            <Select
              name="occupation"
              id="occupation"
              placeholder="Select Your Occupation"
            >
              <Option value="administration">Administration</Option>
              <Option value="media">Media/Advertisement/Entertainment</Option>
              <Option value="agriculture">Agriculture</Option>
              <Option value="airline">Airline/Aviation</Option>
              <Option value="bpo">BPO</Option>
              <Option value="architecture">Architecture</Option>
              <Option value="banking">Banking&Finance</Option>
              <Option value="corporate">Corporate Professionals</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Business" htmlFor="business">
                <Input
                    type="text"
                    name="business"
                    id="business"
                    required
                />
          </Form.Item>
          <Form.Item label="Job" htmlFor="job">
            <Select
              name="job"
              id="job"
              placeholder="Select Your job type"
            >
              <Option value="privateJob">Private Job</Option>
              <Option value="govtJob">Govt job</Option>
              <Option value="entrepreneur">Entrepreneur</Option>
            </Select>
          </Form.Item>
            <Form.Item label="Actual Income Per Annum" htmlFor="annualIncome">
                    <Input
                    type="number"
                    name="annualIncome"
                    id="annualIncome"
                    required
                    />
            </Form.Item>
            <Form.Item label="About My self" htmlFor="mySelf" placeholder="Minimum words 30">
                <TextArea
                    name="mySelf"
                    id="mySelf"
                    rows={3}
                    cols={10}
                />
            </Form.Item>
            <Button type="primary" onClick={handleNext}>
            Next
          </Button>
          <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
            </Form>
        )
    },
    {
        title: "Family Details",
        content: (
            <Form>
                <Form.Item label="Family Type" htmlFor="familyType" >
                    <Select
                        name="familyType"
                        id="familyType"
                        placeholder="Select"
                        >
                        <Option value="joint">Joint Family</Option>
                        <Option value="nuclear">Nuclear Family</Option>
                        <Option value="OtherFamilyType">Others</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Father Occupation" htmlFor="fatherOccupation" >
                    <Select
                        name="fatherOccupation"
                        id="fatherOccupation"
                        placeholder="Select"
                        >
                        <Option value="fatherOcc1">Business/Entrepreneur</Option>
                        <Option value="fatherOcc2">Private Service</Option>
                        <Option value="fatherOcc3">Government Service</Option>
                        <Option value="fatherOcc4">Self Employed</Option>
                        <Option value="fatherOcc5">Expired</Option>
                        <Option value="fatherOcc6">Retired</Option>
                        <Option value="fatherOcc7">Army</Option>
                        <Option value="fatherOcc8">CivilServices</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Mother Occupation" htmlFor="motherOccupation" >
                    <Select
                        name="motherOccupation"
                        id="motherOccupation"
                        placeholder="Select"
                        >
                        <Option value="motherOcc1">Business/Entrepreneur</Option>
                        <Option value="motherOcc2">Private Service</Option>
                        <Option value="motherOcc3">Government Service</Option>
                        <Option value="motherOcc4">Self Employed</Option>
                        <Option value="motherOcc5">Expired</Option>
                        <Option value="motherOcc6">Retired</Option>
                        <Option value="motherOcc7">Army</Option>
                        <Option value="motherOcc8">CivilServices</Option>
                        <Option value="motherOcc9">Teacher</Option>
                        <Option value="motherOcc10">House Wife</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Brother" htmlFor="brother">
                    <Input
                    type="text"
                    name="brother"
                    id="brother"
                    required
                    />
            </Form.Item>
            <Form.Item label="Sister" htmlFor="sister">
                    <Input
                    type="text"
                    name="sister"
                    id="sister"
                    required
                    />
            </Form.Item>
            <Form.Item label="Family Living in" htmlFor="familyLivingIn" >
                <Select
                        name="familyLivingIn"
                        id="familyLivingIn"
                        placeholder="Select"
                        >
                        <Option value="india">India</Option>
                        <Option value="abroad">Abroad</Option>
                       
                </Select>
            </Form.Item>
            <Form.Item label="Contact Details" htmlFor="contactDetails">
                <TextArea
                    name="contactDetails"
                    id="contactDetails"
                    rows={3}
                    cols={10}
                />
            </Form.Item>
            <Form.Item label="About My Family" htmlFor="aboutMyFamily">
                <TextArea
                    name="aboutMyFamily"
                    id="aboutMyFamily"
                    rows={3}
                    cols={10}
                />
            </Form.Item>

            <Button type="primary" onClick={handleNext}>
            Next
          </Button>
            <Button style={{ margin: "0 8px" }} onClick={handlePrev}>
            Previous
          </Button>
               
            </Form>
        )
    }
   
  ];

  return (
    <div className="form-container">
      <h2>Register Form</h2>
      {alertData.show && (
        <Alert
          message={alertData.message}
          type={alertData.type}
          showIcon
          closable
          onClose={() => setAlertData({ ...alertData, show: false })}
          style={{ marginTop: "20px" }}
        />
      )}
      <Steps size="small" current={currentStep}>
        {steps.map((step) => (
          <Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[currentStep].content}</div>
      <p>
        Already have an account? <a href="/login">Sign In Here</a>
      </p>
    </div>
  );
};

export default RegisterPage;