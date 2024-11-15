// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v3.12.4
// source: assessment.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "assessment";

/** Level enum */
export enum Level {
  VALUE1 = 0,
  VALUE2 = 1,
  VALUE3 = 2,
  VALUE4 = 3,
  VALUE5 = 4,
  UNRECOGNIZED = -1,
}

/** Tooth enum */
export enum Tooth {
  HAS = 0,
  NO = 1,
  FULL_DENTURES = 2,
  PARTIAL_DENTURES = 3,
  UNRECOGNIZED = -1,
}

/** GetAssessmentByInsuranceNumberのリクエストメッセージ */
export interface GetAssessmentByInsuranceNumberRequest {
  /** 被保険者番号 */
  insuranceNumber: string;
}

/** GetAssessmentByInsuranceNumberのレスポンスメッセージ */
export interface GetAssessmentByInsuranceNumberResponse {
  user: User | undefined;
  emergencyContact: EmergencyContact | undefined;
  consulter: Consulter | undefined;
  family: Family | undefined;
  home: Home | undefined;
  room: Room | undefined;
  movement: Movement | undefined;
  equipment: Equipment | undefined;
  toilet: Toilet | undefined;
  bathroom: Bathroom | undefined;
}

/** CreateAssessmentのリクエストメッセージ */
export interface CreateAssessmentRequest {
  user: User | undefined;
  service: Service | undefined;
}

/** CreateAssessmentのレスポンスメッセージ */
export interface CreateAssessmentResponse {
  user: User | undefined;
  service: Service | undefined;
}

/** Userメッセージ */
export interface User {
  id: number;
  insuredId: number;
  name: string;
  telephoneNumber: string;
  mobileNumber: string;
  age: number;
  sex: boolean;
  address: string;
  requestedDate: string;
  emergencyId: number;
  consulterId: number;
  bathroom: Bathroom | undefined;
  equipment: Equipment | undefined;
  family: Family | undefined;
  home: Home | undefined;
  movement: Movement | undefined;
  room: Room | undefined;
  toilet: Toilet | undefined;
  consulter: Consulter | undefined;
  emergencyContact: EmergencyContact | undefined;
}

/** EmergencyContactメッセージ */
export interface EmergencyContact {
  id: number;
  name: string;
  age: number;
  sex: boolean;
  telephoneNumber: string;
  mobileNumber: string;
  address: string;
  relationship: string;
}

/** Consulterメッセージ */
export interface Consulter {
  id: number;
  name: string;
  age: number;
  sex: boolean;
  telephoneNumber: string;
  mobileNumber: string;
  address: string;
  relationship: string;
}

/** Familyメッセージ */
export interface Family {
  id: number;
  userId: number;
  familyId: number;
  name: string;
  relationship: string;
  livingSeparately: string;
  employment: string;
  condition: string;
  memo: string;
}

/** Homeメッセージ */
export interface Home {
  id: number;
  userId: number;
  style: string;
  memo: string;
}

/** Roomメッセージ */
export interface Room {
  id: number;
  userId: number;
  myRoom: boolean;
  floor: number;
  elevator: boolean;
  bed: string;
  electricBed: string;
  sunshine: boolean;
  heater: boolean;
  cooler: boolean;
}

/** Movementメッセージ */
export interface Movement {
  id: number;
  userId: number;
  assistiveTechnology: boolean;
  wheelchair: boolean;
  electricWheelchair: boolean;
  stick: boolean;
  walker: boolean;
  other: string;
  indoor: boolean;
}

/** Equipmentメッセージ */
export interface Equipment {
  id: number;
  userId: number;
  cooktop: boolean;
  heater: string;
}

/** Toiletメッセージ */
export interface Toilet {
  id: number;
  userId: number;
  style: string;
  handrail: boolean;
  step: boolean;
}

/** Bathroomメッセージ */
export interface Bathroom {
  id: number;
  userId: number;
  existence: boolean;
  handrail: boolean;
  step: boolean;
}

/** Serviceメッセージ */
export interface Service {
  id: number;
  insuredId: number;
  name: string;
  date: string;
  athome: AtHome | undefined;
  dailylifeindependenceLevel: DailyLifeIndependenceLevel | undefined;
  disabilitynotebook: DisabilityNotebook | undefined;
  eligibility: Eligibility | undefined;
  independencesupportmedicalexpenses: IndependenceSupportMedicalExpenses | undefined;
  mentaldisabilitycertificate: MentalDisabilityCertificate | undefined;
  specialeducationrecordbook: SpecialEducationRecordBook | undefined;
  using: Using | undefined;
  wants: Wants | undefined;
}

/** Usingメッセージ */
export interface Using {
  id: number;
  userId: number;
  detail: string;
  provider: string;
  memo: string;
}

/** Wantsメッセージ */
export interface Wants {
  id: number;
  userId: number;
  detail: string;
  provider: string;
  memo: string;
}

/** Eligibilityメッセージ */
export interface Eligibility {
  id: number;
  serviceId: number;
  type: string;
  done: boolean;
  level: Level;
  date: string;
}

/** DisabilityNotebookメッセージ */
export interface DisabilityNotebook {
  id: number;
  userId: number;
  possess: boolean;
  grade: number;
  date: string;
}

/** SpecialEducationRecordBookメッセージ */
export interface SpecialEducationRecordBook {
  id: number;
  userId: number;
  possess: boolean;
  grade: number;
  date: string;
}

/** MentalDisabilityCertificateメッセージ */
export interface MentalDisabilityCertificate {
  id: number;
  userId: number;
  possess: boolean;
  grade: number;
  date: string;
}

/** IndependenceSupportMedicalExpensesメッセージ */
export interface IndependenceSupportMedicalExpenses {
  id: number;
  userId: number;
  possess: boolean;
  grade: number;
}

/** DailyLifeIndependenceLevelメッセージ */
export interface DailyLifeIndependenceLevel {
  id: number;
  userId: number;
  disabledElderly: string;
  dementia: string;
}

/** AtHomeメッセージ */
export interface AtHome {
  id: number;
  userId: number;
  menu: string;
  date: string;
}

export const ASSESSMENT_PACKAGE_NAME = "assessment";

export interface AssessmentServiceClient {
  getAssessmentByInsuranceNumber(
    request: GetAssessmentByInsuranceNumberRequest,
  ): Observable<GetAssessmentByInsuranceNumberResponse>;

  createAssessment(request: CreateAssessmentRequest): Observable<CreateAssessmentResponse>;
}

export interface AssessmentServiceController {
  getAssessmentByInsuranceNumber(
    request: GetAssessmentByInsuranceNumberRequest,
  ):
    | Promise<GetAssessmentByInsuranceNumberResponse>
    | Observable<GetAssessmentByInsuranceNumberResponse>
    | GetAssessmentByInsuranceNumberResponse;

  createAssessment(
    request: CreateAssessmentRequest,
  ): Promise<CreateAssessmentResponse> | Observable<CreateAssessmentResponse> | CreateAssessmentResponse;
}

export function AssessmentServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getAssessmentByInsuranceNumber", "createAssessment"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AssessmentService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AssessmentService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const ASSESSMENT_SERVICE_NAME = "AssessmentService";
