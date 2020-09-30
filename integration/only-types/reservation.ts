import { Any, Any_Original } from './google/protobuf/any';
import { Timestamp_Original } from './google/protobuf/timestamp';


export interface Registration {
  eventName: string;
  date: Date | undefined;
  perks: Any | undefined;
}

export interface Registration_Original {
  eventName: string;
  date: Timestamp_Original | undefined;
  perks: Any_Original | undefined;
}
