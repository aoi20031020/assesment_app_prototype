// src/mappers/assessment-mapper.ts

import {
  InsuredPerson,
  EmergencyContact,
  Contact,
  FamilyStructure,
  ResidenceInfo,
  ToiletInfo,
  BathroomInfo,
  MobilityInfo,
} from 'src/protogen/assessment'; // プロトコルバッファからのインポート

export function mapAssessmentToProto(assessment: any): {
  insuredPerson: InsuredPerson;
  emergencyContact: EmergencyContact;
  contact: Contact;
  familyStructure: FamilyStructure;
  residenceInfo: ResidenceInfo;
  toiletInfo: ToiletInfo;
  bathroomInfo: BathroomInfo;
  mobilityInfo: MobilityInfo;
} {
  return {
    insuredPerson: {
      insuranceNumber: assessment.insuredPerson.insuranceNumber,
      fullName: assessment.insuredPerson.fullName,
      age: assessment.insuredPerson.age,
      gender: assessment.insuredPerson.gender,
      dependencyEndDate: assessment.insuredPerson.dependencyEndDate,
      emergencyContactId: assessment.insuredPerson.emergencyContactId,
      contactId: assessment.insuredPerson.contactId,
      familyId: assessment.insuredPerson.familyId,
    },
    emergencyContact: {
      emergencyContactId: assessment.emergencyContact.emergencyContactId,
      fullName: assessment.emergencyContact.fullName,
      relationToInsured: assessment.emergencyContact.relationToInsured,
      gender: assessment.emergencyContact.gender,
      address: assessment.emergencyContact.address,
      phone: assessment.emergencyContact.phone,
      relationToSelf: assessment.emergencyContact.relationToSelf,
    },
    contact: {
      contactId: assessment.contact.contactId,
      fullName: assessment.contact.fullName,
      relationToInsured: assessment.contact.relationToInsured,
      gender: assessment.contact.gender,
      address: assessment.contact.address,
      phone: assessment.contact.phone,
      relationToSelf: assessment.contact.relationToSelf,
    },
    familyStructure: {
      insuranceNumber: assessment.familyStructure.insuranceNumber,
      familyId: assessment.familyStructure.familyId,
      fullName: assessment.familyStructure.fullName,
      gender: assessment.familyStructure.gender,
      status: assessment.familyStructure.status,
      familyRelationship: assessment.familyStructure.familyRelationship,
      activityStatus: assessment.familyStructure.activityStatus,
    },
    residenceInfo: {
      insuranceNumber: assessment.residenceInfo.insuranceNumber,
      residenceId: assessment.residenceInfo.residenceId,
      householdStatus: assessment.residenceInfo.householdStatus,
      situation: assessment.residenceInfo.situation,
      hasToilet: assessment.residenceInfo.hasToilet,
      hasBath: assessment.residenceInfo.hasBath,
      hasLivingRoom: assessment.residenceInfo.hasLivingRoom,
      caretakerId: assessment.residenceInfo.caretakerId,
      deliveryService: assessment.residenceInfo.deliveryService,
      mobilityStatus: assessment.residenceInfo.mobilityStatus,
    },
    toiletInfo: {
      insuranceNumber: assessment.toiletInfo.insuranceNumber,
      toiletType: assessment.toiletInfo.toiletType,
      hasHandrail: assessment.toiletInfo.hasHandrail,
      hasStepsToToilet: assessment.toiletInfo.hasStepsToToilet,
    },
    bathroomInfo: {
      insuranceNumber: assessment.bathroomInfo.insuranceNumber,
      hasBathroom: assessment.bathroomInfo.hasBathroom,
      hasHandrail: assessment.bathroomInfo.hasHandrail,
      hasStepsToBathroom: assessment.bathroomInfo.hasStepsToBathroom,
    },
    mobilityInfo: {
      insuranceNumber: assessment.mobilityInfo.insuranceNumber,
      usesWelfareEquipment: assessment.mobilityInfo.usesWelfareEquipment,
      usesWheelchair: assessment.mobilityInfo.usesWheelchair,
      usesElectricWheelchair: assessment.mobilityInfo.usesElectricWheelchair,
      usesCane: assessment.mobilityInfo.usesCane,
      canWalk: assessment.mobilityInfo.canWalk,
      otherMobilityAid: assessment.mobilityInfo.otherMobilityAid,
      usesIndoorOrOutdoor: assessment.mobilityInfo.usesIndoorOrOutdoor,
    },
  };
}
