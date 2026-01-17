import React, { useState } from 'react';
import { FileText, User, GraduationCap, Briefcase, Code, Award, Eye, Download, Sparkles } from 'lucide-react';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, India',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
    portfolio: 'johndoe.dev',
    summary: '',
    education: [{
      institution: '',
      degree: '',
      field: '',
      grade: '',
      startYear: '',
      endYear: ''
    }],
    experience: [{
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }],
    projects: [{
      name: '',
      technologies: '',
      link: '',
      description: ''
    }],
    skills: [],
    certifications: []
  });

  const [newSkill, setNewSkill] = useState('');
  const [newCert, setNewCert] = useState('');

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      if (index !== null) {
        const newArray = [...prev[section]];
        newArray[index] = { ...newArray[index], [field]: value };
        return { ...prev, [section]: newArray };
      }
      return { ...prev, [field]: value };
    });
  };

  const addItem = (section) => {
    const templates = {
      education: { institution: '', degree: '', field: '', grade: '', startYear: '', endYear: '' },
      experience: { company: '', position: '', startDate: '', endDate: '', description: '' },
      projects: { name: '', technologies: '', link: '', description: '' }
    };
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], templates[section]]
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({ ...prev, skills: [...prev.skills, newSkill.trim()] }));
      setNewSkill('');
    }
  };

  const addCertification = () => {
    if (newCert.trim()) {
      setFormData(prev => ({ ...prev, certifications: [...prev.certifications, newCert.trim()] }));
      setNewCert('');
    }
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const removeCertification = (index) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index)
    }));
  };

  const downloadPDF = () => {
    const resumeContent = document.getElementById('resume-preview');
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Resume</title>');
    printWindow.document.write('<style>body{font-family:Arial,sans-serif;padding:20px;} h1{font-size:24px;margin-bottom:5px;} h2{font-size:18px;color:#1e40af;margin-top:20px;border-bottom:2px solid #1e40af;padding-bottom:5px;} .contact{font-size:12px;color:#666;margin-bottom:20px;} .section{margin-bottom:15px;} .item{margin-bottom:10px;} .bold{font-weight:bold;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(resumeContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  const tabs = [
    { id: 'personal', label: 'Personal', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'preview', label: 'Preview', icon: Eye }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-900 p-2 rounded">
              <FileText className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold">InternX</h1>
              <p className="text-xs text-gray-500">Powered by AI</p>
            </div>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button className="text-blue-900 mb-4 flex items-center gap-2 hover:underline">
          ← Back to Home
        </button>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              <FileText size={32} />
              Resume Builder
            </h2>
            <p className="text-gray-600 mt-1">Create a professional resume in minutes</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setActiveTab('preview')}
              className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50"
            >
              <Eye size={18} />
              Preview
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
              <Sparkles size={18} />
              AI Enhance
            </button>
            <button 
              onClick={downloadPDF}
              className="px-4 py-2 bg-blue-900 text-white rounded-lg flex items-center gap-2 hover:bg-blue-800"
            >
              <Download size={18} />
              Download PDF
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 flex items-center justify-center gap-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-900 text-blue-900 bg-blue-50'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Personal Information */}
          {activeTab === 'personal' && (
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <User size={24} />
                Personal Information
              </h3>
              <p className="text-gray-600 mb-6">Add your contact details and professional summary</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange(null, 'fullName', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange(null, 'email', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange(null, 'phone', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange(null, 'location', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mumbai, India"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">LinkedIn</label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => handleInputChange(null, 'linkedin', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="linkedin.com/in/johndoe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GitHub</label>
                  <input
                    type="text"
                    value={formData.github}
                    onChange={(e) => handleInputChange(null, 'github', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="github.com/johndoe"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-2">Portfolio</label>
                  <input
                    type="text"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange(null, 'portfolio', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="johndoe.dev"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Professional Summary</label>
                <textarea
                  value={formData.summary}
                  onChange={(e) => handleInputChange(null, 'summary', e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows="5"
                  placeholder="Write a brief summary about yourself, your skills, and career goals..."
                />
                <p className="text-sm text-gray-500 mt-2">Tip: Keep it concise, 2-3 sentences highlighting your key strengths.</p>
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h3>
              <p className="text-gray-600 mb-6">Add your educational background</p>

              {formData.education.map((edu, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Institution Name</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="University/College Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="B.Tech, MBA, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => handleInputChange('education', 'field', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Computer Science, Business, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Grade/CGPA</label>
                      <input
                        type="text"
                        value={edu.grade}
                        onChange={(e) => handleInputChange('education', 'grade', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="8.5 CGPA or 85%"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Year</label>
                      <input
                        type="text"
                        value={edu.startYear}
                        onChange={(e) => handleInputChange('education', 'startYear', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Year</label>
                      <input
                        type="text"
                        value={edu.endYear}
                        onChange={(e) => handleInputChange('education', 'endYear', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="2024 or Expected 2025"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => addItem('education')}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                + Add Education
              </button>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'experience' && (
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Briefcase size={24} />
                Work Experience
              </h3>
              <p className="text-gray-600 mb-6">Add your internships and work experience</p>

              {formData.experience.map((exp, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Company/Organization"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Position/Role</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Software Developer Intern"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date</label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="MM/YYYY or Present"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="4"
                      placeholder="Describe your responsibilities, achievements, and impact..."
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => addItem('experience')}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                + Add Experience
              </button>
            </div>
          )}

          {/* Projects */}
          {activeTab === 'projects' && (
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Code size={24} />
                Projects
              </h3>
              <p className="text-gray-600 mb-6">Showcase your best projects</p>

              {formData.projects.map((project, index) => (
                <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Name</label>
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => handleInputChange('projects', 'name', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="E-commerce Platform"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Technologies Used</label>
                      <input
                        type="text"
                        value={project.technologies}
                        onChange={(e) => handleInputChange('projects', 'technologies', e.target.value, index)}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Project Link (Optional)</label>
                    <input
                      type="text"
                      value={project.link}
                      onChange={(e) => handleInputChange('projects', 'link', e.target.value, index)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows="4"
                      placeholder="Describe what the project does and your contributions..."
                    />
                  </div>
                </div>
              ))}

              <button
                onClick={() => addItem('projects')}
                className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                + Add Project
              </button>
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Award size={24} />
                  Skills
                </h3>
                <p className="text-gray-600 mb-4">Add your technical and soft skills</p>

                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add a skill (e.g., React, Python, Communication)"
                  />
                  <button
                    onClick={addSkill}
                    className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                  >
                    +
                  </button>
                </div>

                {formData.skills.length === 0 ? (
                  <p className="text-gray-500 text-sm">No skills added yet</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm flex items-center gap-2"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(index)}
                          className="text-blue-900 hover:text-red-600"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                  <Award size={24} />
                  Certifications
                </h3>
                <p className="text-gray-600 mb-4">Add your certifications and achievements</p>

                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    value={newCert}
                    onChange={(e) => setNewCert(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCertification()}
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add a certification (e.g., AWS Solutions Architect)"
                  />
                  <button
                    onClick={addCertification}
                    className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
                  >
                    +
                  </button>
                </div>

                {formData.certifications.length === 0 ? (
                  <p className="text-gray-500 text-sm">No certifications added yet</p>
                ) : (
                  <div className="space-y-2">
                    {formData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 bg-gray-50 rounded-lg flex items-center justify-between"
                      >
                        <span>{cert}</span>
                        <button
                          onClick={() => removeCertification(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Preview */}
          {activeTab === 'preview' && (
            <div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Eye size={24} />
                Resume Preview
              </h3>
              <p className="text-gray-600 mb-6">Preview how your resume will look</p>

              <div id="resume-preview" className="bg-white border-2 border-gray-200 p-8 rounded-lg max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center border-b-2 pb-4 mb-6">
                  <h1 className="text-3xl font-bold mb-2">{formData.fullName || 'Your Name'}</h1>
                  <div className="text-sm text-gray-600 space-x-3">
                    {formData.email && <span>{formData.email}</span>}
                    {formData.phone && <span>• {formData.phone}</span>}
                    {formData.location && <span>• {formData.location}</span>}
                  </div>
                  <div className="text-sm text-gray-600 mt-1 space-x-3">
                    {formData.linkedin && <span>{formData.linkedin}</span>}
                    {formData.github && <span>• {formData.github}</span>}
                    {formData.portfolio && <span>• {formData.portfolio}</span>}
                  </div>
                </div>

                {/* Summary */}
                {formData.summary && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Professional Summary</h2>
                    <p className="text-gray-700">{formData.summary}</p>
                  </div>
                )}

                {/* Education */}
                {formData.education.some(e => e.institution) && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Education</h2>
                    {formData.education.map((edu, index) => (
                      edu.institution && (
                        <div key={index} className="mb-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-bold">{edu.institution}</div>
                              <div className="text-gray-700">{edu.degree} {edu.field && `in ${edu.field}`}</div>
                              {edu.grade && <div className="text-gray-600 text-sm">Grade: {edu.grade}</div>}
                            </div>
                            <div className="text-gray-600 text-sm">
                              {edu.startYear} - {edu.endYear}
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Experience */}
                {formData.experience.some(e => e.company) && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Work Experience</h2>
                    {formData.experience.map((exp, index) => (
                      exp.company && (
                        <div key={index} className="mb-4">
                          <div className="flex justify-between items-start mb-1">
                            <div>
                              <div className="font-bold">{exp.position}</div>
                              <div className="text-gray-700">{exp.company}</div>
                            </div>
                            <div className="text-gray-600 text-sm">
                              {exp.startDate} - {exp.endDate}
                            </div>
                          </div>
                          {exp.description && <p className="text-gray-700 text-sm mt-2">{exp.description}</p>}
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Projects */}
                {formData.projects.some(p => p.name) && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Projects</h2>
                    {formData.projects.map((project, index) => (
                      project.name && (
                        <div key={index} className="mb-4">
                          <div className="font-bold">{project.name}</div>
                          {project.technologies && (
                            <div className="text-gray-600 text-sm">Technologies: {project.technologies}</div>
                          )}
                          {project.link && (
                            <div className="text-blue-600 text-sm">{project.link}</div>
                          )}
                          {project.description && <p className="text-gray-700 text-sm mt-1">{project.description}</p>}
                        </div>
                      )
                    ))}
                  </div>
                )}

                {/* Skills */}
                {formData.skills.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {formData.certifications.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-1 mb-3">Certifications</h2>
                    <ul className="list-disc list-inside space-y-1">
                      {formData.certifications.map((cert, index) => (
                        <li key={index} className="text-gray-700">{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-900 p-2 rounded">
                  <FileText className="text-white" size={20} />
                </div>
                <span className="font-bold text-lg">InternX</span>
              </div>
              <p className="text-sm text-gray-600">
                An initiative under the PM Internship Scheme to connect talented students with industry opportunities across India.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-900">Home</a></li>
                <li><a href="#" className="hover:text-blue-900">Get Started</a></li>
                <li><a href="#" className="hover:text-blue-900">About</a></li>
                <li><a href="#" className="hover:text-blue-900">Ministry of Corporate Affairs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>support@pminternship.gov.in</li>
                <li>Helpline: 1800-XXX-XXXX</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResumeBuilder;