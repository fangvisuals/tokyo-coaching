export interface Testimonial {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    rating: number;
    comment: string;
    isApproved: boolean;
    createdAt: Date;
  }