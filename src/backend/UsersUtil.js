/** 
 * Returns a list of all related users calculated by a
 * weighted score determined by age, gender, and pet preferences.
 * 
 * @param {!User} primaryUser user we want to find matches for.
 * @param {!Array<User>} allUsers list of all user objects.
 * @param {{minAgePref: number, maxAgePref: number, genderPref: string}} prefs 
 *  object containing min + max age pref, and gender pref.
 * @param {!number=} minScoreToMatch (Optional) the minimum score needed to
 * consider a match.
 * 
 * @returns {!Array<User>} list of all related users, sorted by weighted score in descending 
 *  order.
 */
function getMatchesForUser(primaryUser, allUsers, prefs minScoreToMatch=0.4) {
    const relatedUsers = allUsers
        .filter(user !== primaryUser)
        .map(user => ({user, score: getWeightedScore(primaryUser, user, prefs)}))

    return relatedUsers
        .filter(userObj => userObj.score >= minScore)
        .sort((a, b) => b.score - a.score)
        .map(userObj => userObj.user)
}

/** 
 * Calculates a weighted score by comparing the preferences of the 
 * primary user to the attributes of the other user. This only compares age,
 * pet, and gender preferences. 
 * 
 * @param {!User} primaryUser user we want to find matches for.
 * @param {!User} otherUser user we are comparing primary user's prefs with.
 * @param {{minAgePref: number, maxAgePref: number, genderPref: string}} prefs 
 *  object containing min + max age pref, and gender pref.
 * 
 * @returns {!number} Weighted score between 0.0-1.0 of how related both users are.
 */
function getWeightedScore(primaryUser, otherUser, prefs) {
    let score = 0.0;
    
    // Gender Preference
    // If user has no pref, +1/2 of score (we'd rather look at other categories more)
    // Penalty if pref is not met
    if (prefs.genderPref === otherUser.gender) {
      score += PREF_WEIGHTS.genderPrefWeight;
    } else if (primaryUser.genderPref === 'no-preferences') {
        score += PREF_WEIGHTS.genderPrefWeight * 0.5;
    } else if (primaryUser.genderPref === 'other' && otherUser.gender === 'non-binary') {
      score += PREF_WEIGHTS.genderPrefWeight;
    } else {
        score -= PREF_WEIGHTS.genderPrefWeight * 0.2;
    }
  
    // Age Preference
    // Apply a penalty in case other user is outside of the range
    if (otherUser.age <= prefs.maxAgePref && otherUser.age >= prefs.minAgePref) {
      score += PREF_WEIGHTS.agePrefWeight;
    } else {
      score -= PREF_WEIGHTS.agePrefWeight * 0.2;
    }
    
    // Pet Preference
    // Apply a penalty in case other user is outside the range
    if (primaryUser.hasPet === otherUser.hasPet) {
      score += PREF_WEIGHTS.petPrefWeight;
    } else {
        score -= PREF_WEIGHTS.petPrefWeight * 0.2;
    }
    
    return score;
  }

const PREF_WEIGHTS = {
    locationWeight: 0.3,
    agePrefWeight: 0.3,
    genderPrefWeight: 0.2,
    petPrefWeight: 0.2,
};

const USER_POSSIBLE_GENDERS = ['female', 'male', 'non-binary', 'prefer not to say']

export default {getMatchesForUser}