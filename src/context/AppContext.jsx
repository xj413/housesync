import React, { createContext, useContext, useState } from 'react';
import { students, properties, groups as mockGroups, landlords, calculateCompatibility, calculateGroupHouseFit } from '../data/durhamData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(students[0]);
  const [currentLandlord, setCurrentLandlord] = useState(null);
  const [allGroups, setAllGroups] = useState(mockGroups);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'student' | 'landlord'
  const [savedProperties, setSavedProperties] = useState([]);
  const [viewingRequests, setViewingRequests] = useState(landlords.flatMap(l => l.viewingRequests));

  const login = (type, user) => {
    setUserType(type);
    setIsLoggedIn(true);
    if (type === 'student') setCurrentUser(user || students[0]);
    if (type === 'landlord') setCurrentLandlord(user || landlords[0]);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setCurrentUser(students[0]);
    setCurrentLandlord(null);
  };

  const getUserGroup = () => allGroups.find(g => g.memberIds.includes(currentUser?.id));

  const getMatches = () => {
    if (!currentUser) return [];
    return students
      .filter(s => s.id !== currentUser.id)
      .map(s => ({ student: s, ...calculateCompatibility(currentUser, s) }))
      .sort((a, b) => b.score - a.score);
  };

  const getHouseRecommendations = (group) => {
    if (!group) return [];
    return properties
      .map(p => ({ property: p, ...calculateGroupHouseFit(group, p, students) }))
      .sort((a, b) => b.score - a.score);
  };

  const toggleSavedProperty = (propertyId) => {
    setSavedProperties(prev =>
      prev.includes(propertyId) ? prev.filter(id => id !== propertyId) : [...prev, propertyId]
    );
  };

  const sendViewingRequest = (groupId, propertyId, message, date) => {
    const newReq = {
      id: `vr${Date.now()}`, groupId, propertyId, status: 'Pending',
      requestedDate: date, message, submittedAt: 'Just now',
    };
    setViewingRequests(prev => [...prev, newReq]);
    return newReq;
  };

  const addChatMessage = (groupId, senderId, text) => {
    setAllGroups(prev => prev.map(g =>
      g.id === groupId
        ? { ...g, chatMessages: [...g.chatMessages, { sender: senderId, text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), date: 'Today' }] }
        : g
    ));
  };

  return (
    <AppContext.Provider value={{
      currentUser, setCurrentUser, currentLandlord, setCurrentLandlord,
      allStudents: students, allProperties: properties, allLandlords: landlords,
      allGroups, setAllGroups, isLoggedIn, userType, login, logout,
      getUserGroup, getMatches, getHouseRecommendations,
      savedProperties, toggleSavedProperty, viewingRequests, sendViewingRequest,
      addChatMessage, calculateCompatibility, calculateGroupHouseFit,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
