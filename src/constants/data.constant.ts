export const DataConstant = {
  KURATED_INTERVIEW_TOOLS_ID:
    process.env.NEXT_CLIENT_KURATED_INTERVIEW_TOOLS_ID,
  KURATED_COURSE_ID: process.env.NEXT_CLIENT_KURATED_COURSE_ID,
  INTERVIEW_PLAN: {
    ONE_MONTH: {
      id: process.env.INTERVIEW_ONE_MONTH_PLAN_ID,
    },
    THREE_MONTH: {
      id: process.env.INTERVIEW_THREE_MONTH_PLAN_ID,
    },
    SIX_MONTH: {
      id: process.env.INTERVIEW_SIX_MONTH_PLAN_ID,
    },
  },
} as const;
