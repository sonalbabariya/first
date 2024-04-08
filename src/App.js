import React, { useState } from 'react';
import PersonalForm from './components/PersonalForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';
import DetailsTable from './components/DetailsTable';

function App() {
    const [formData, setFormData] = useState({
      personalDetails: {},
      educationDetails: {},
      workDetails: {},
    });
  
    const [currentPage, setCurrentPage] = useState(0);
  
    const handleNext = (data) => {
      setFormData({ ...formData, ...data });
      setCurrentPage(currentPage + 1);
    };
  
    const handleBack = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const handleSave = () => {
      // Save formData to database or perform other actions
      setCurrentPage(currentPage + 1);
    };
  
    const handleEdit = (index) => {
      const { userDetails, educationDetails, jobDetails } = userData[index];
          setUserDetails(userDetails);
          setEducationDetails(educationDetails);
          setJobDetails(jobDetails);
          setCurrentFormIndex(0);
    };
  
    const handleDelete = (index) => {
      const confirmDelete = window.confirm("Are you sure you want to delete this data?");
      if (confirmDelete) {
        const updatedUserData = [...userData];
              updatedUserData.splice(index, 1);
              setUserData(updatedUserData);
      };
    };
  
    return (
      <div className="App">
        {currentPage === 0 && <PersonalDetailsForm onNext={handleNext} />}
        {currentPage === 1 && <EducationDetailsForm onNext={handleNext} onBack={handleBack} />}
        {currentPage === 2 && <WorkDetailsForm onNext={handleSave} onBack={handleBack} />}
        {currentPage === 3 && (
          <DetailsTable
            personalDetails={formData.personalDetails}
            educationDetails={formData.educationDetails}
            workDetails={formData.workDetails}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
       
      </div>
    );
  }

export default App;