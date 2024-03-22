const providers = [
  { id: 1, name: "Dr. Smith", workingDays: [1] },
  { id: 2, name: "Dr. Johnson", workingDays: [1, 2] },
  { id: 3, name: "Dr. Brown", workingDays: [1, 2, 3] },
  { id: 4, name: "Dr. White", workingDays: [1, 2, 3, 4] },
  { id: 5, name: "Dr. Black", workingDays: [1, 2, 3, 4, 5] },
  { id: 6, name: "Dr. Green", workingDays: [1, 2, 3, 4] },
  { id: 7, name: "Dr. Blue", workingDays: [1, 2, 3] },
];

const locations = [
  { id: 1, name: "Main Hospital" },
  { id: 2, name: "Clinic A" },
  { id: 3, name: "Clinic B" },
  { id: 4, name: "Clinic C" },
  { id: 5, name: "Clinic D" },
  { id: 6, name: "Clinic E" },
  { id: 7, name: "Clinic F" },
];

const reasons = [
  { id: 1, name: "Annual Checkup" },
  { id: 2, name: "Injury" },
  { id: 3, name: "Sickness" },
  { id: 4, name: "Follow-up" },
  { id: 5, name: "Consultation" },
  { id: 6, name: "Treatment" },
  { id: 7, name: "Other" },
];

const mapping = {
  1: [
    { providerId: 1, reasonIds: [1, 2] },
    { providerId: 2, reasonIds: [2] },
    { providerId: 3, reasonIds: [1] },
  ],
  2: [
    { providerId: 4, reasonIds: [1] },
    { providerId: 1, reasonIds: [2] },
    { providerId: 19, reasonIds: [2] },
  ],
  3: [],
  4: [{ providerId: 7, reasonIds: [2] }],
  5: [{ providerId: 1, reasonIds: [13] }],
  6: [{ providerId: 4, reasonIds: [2] }],
  7: [{ providerId: 3, reasonIds: [] }],
};

const isProviderAvailable = (providerId, locationId, reasonId, day) => {
  // your implementation here
};

// isProviderAvailable(1, 1, 1, 1); // true
// isProviderAvailable(1, 1, 1, 2); // false
// isProviderAvailable(1, 1, 2, 1); // true
// isProviderAvailable(1, 1, 2, 2); // true
// isProviderAvailable(1, 1, 2, 3); // false
// isProviderAvailable(1, 1, 3, 1); // true

const getProviderReasons = (providerId, locationId) => {
  // your implementation here
};

// getProviderReasons(1, 1); // [1, 2]
// getProviderReasons(1, 2); // [2]
// getProviderReasons(1, 3); // []
// getProviderReasons(2, 1); // [2]
// getProviderReasons(2, 2); // []

const getProviders = (locationId, reasonId) => {
  // your implementation here
};

// getProviders(1, 1); // [1, 3]
// getProviders(1, 2); // [1, 2]
// getProviders(1, 3); // [3]
// getProviders(2, 1); // [4, 1]
// getProviders(2, 2); // [1, 19]
