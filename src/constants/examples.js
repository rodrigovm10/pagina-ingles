export const TITLES = ['Grammatical tense', 'Active voice', 'Passive voice']

export const EXAMPLES = [
  // Simple Present
  {
    id: 1,
    tense: 'Simple present',
    activeVoice: 'Someone reads the book.',
    passiveVoice: 'The book is read.'
  },
  {
    id: 2,
    tense: 'Simple present',
    activeVoice: 'Dogs chase cats.',
    passiveVoice: 'Cats are chased by dogs.'
  },

  // Simple Past
  {
    id: 3,
    tense: 'Simple past',
    activeVoice: 'The team wrote the report.',
    passiveVoice: 'The report was written by the team.'
  },
  {
    id: 4,
    tense: 'Simple past',
    activeVoice: 'He painted the fence.',
    passiveVoice: 'The fence was painted by him.'
  },

  // Simple Future
  {
    id: 5,
    tense: 'Simple future',
    activeVoice: 'Millions of people will watch the movie.',
    passiveVoice: 'The movie will be watched by millions of people.'
  },
  {
    id: 6,
    tense: 'Simple future',
    activeVoice: 'She will open the store.',
    passiveVoice: 'The store will be opened by her.'
  },

  // Present Continuous
  {
    id: 7,
    tense: 'Present continuous',
    activeVoice: 'She is playing the piano.',
    passiveVoice: 'The piano is being played by her.'
  },
  {
    id: 8,
    tense: 'Present continuous',
    activeVoice: 'They are building a house.',
    passiveVoice: 'A house is being built by them.'
  },

  // Past Continuous
  {
    id: 9,
    tense: 'Past continuous',
    activeVoice: 'I was watching a cooking tutorial.',
    passiveVoice: 'The cooking tutorial was being watched by me.'
  },
  {
    id: 10,
    tense: 'Past continuous',
    activeVoice: 'We were discussing the project.',
    passiveVoice: 'The project was being discussed by us.'
  },

  // Future Continuous
  {
    id: 11,
    tense: 'Future continuous',
    activeVoice: 'They will be traveling to Madrid next month.',
    passiveVoice: 'Madrid will be traveled to by them next month.'
  },
  {
    id: 12,
    tense: 'Future continuous',
    activeVoice: 'He will be running a marathon.',
    passiveVoice: 'A marathon will be run by him.'
  },

  // Present Perfect
  {
    id: 13,
    tense: 'Present perfect',
    activeVoice: 'I have visited that museum before.',
    passiveVoice: 'The museum has been visited by me.'
  },
  {
    id: 14,
    tense: 'Present perfect',
    activeVoice: 'We have completed the assignment.',
    passiveVoice: 'The assignment has been completed by us.'
  },

  // Past Perfect
  {
    id: 15,
    tense: 'Past perfect',
    activeVoice: 'They had lived in this city for five years.',
    passiveVoice: 'This city had been lived in by them for five years.'
  },
  {
    id: 16,
    tense: 'Past perfect',
    activeVoice: 'She had prepared the meal.',
    passiveVoice: 'The meal had been prepared by her.'
  },

  // Future Perfect
  {
    id: 17,
    tense: 'Future perfect',
    activeVoice: 'In a few hours, I will have finished reading the novel.',
    passiveVoice: 'In a few hours, the novel will have been finished by me.'
  },
  {
    id: 18,
    tense: 'Future perfect',
    activeVoice: 'They will have renovated the house.',
    passiveVoice: 'The house will have been renovated by them.'
  },

  // Modal Verb (could)
  {
    id: 19,
    tense: 'Modal verb (could)',
    activeVoice: 'You could do the task.',
    passiveVoice: 'The task could be done by you.'
  },
  {
    id: 20,
    tense: 'Modal verb (should)',
    activeVoice: 'He should solve the puzzle.',
    passiveVoice: 'The puzzle should be solved by him.'
  },

  // Modal Perfect (can)
  {
    id: 21,
    tense: 'Modal perfect (should)',
    activeVoice: 'You should have received the email by now',
    passiveVoice: 'The email should have been received by you by now.'
  },
  {
    id: 22,
    tense: 'Modal perfect (might)',
    activeVoice: 'We might have visited the museum last weekend',
    passiveVoice: 'The museum might have been visited by us last weekend.'
  }
]

export const TENSES = [
  {
    id: 1,
    tense: 'General',
    structure: 'Object + verb to be + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 2,
    tense: 'Present Simple',
    structure: 'Object + am/is/are + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 3,
    tense: 'Past Simple',
    structure: 'Object + was/were + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 4,
    tense: 'Future Simple',
    structure: 'Object + will be + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 5,
    tense: 'Present Continuous',
    structure: 'Object + am/is/are being + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 6,
    tense: 'Past Continuous',
    structure: 'Object + was/were being + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 7,
    tense: 'Future Continuous',
    structure: 'Object + will be being + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 8,
    tense: 'Present Perfect',
    structure: 'Object + has/have been + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 9,
    tense: 'Past Perfect',
    structure: 'Object + had been + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 10,
    tense: 'Future Perfect',
    structure: 'Object + will have been + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 11,
    tense: 'Modal verb',
    structure:
      'Object + modal verb to be + in the tense of the sentence + past participle + (OPTIONAL) preposition by + subject'
  },
  {
    id: 12,
    tense: 'Modal verb perfect',
    structure: 'Object + modal verb + have been + past participle + (OPTIONAL) preposition by + subject'
  }
]

export const EXERCISES = [
  {
    id: 1,
    text: 'The cake was baked by Mary.',
    response: 'passive',
    status: false
  },
  {
    id: 2,
    text: 'The students were taught by the professor.',
    response: 'passive',
    status: false
  },
  {
    id: 3,
    text: 'A new bridge is being built across the river.',
    response: 'active',
    status: false
  },
  {
    id: 4,
    text: 'The novel was written by the famous author.',
    response: 'passive',
    status: false
  },
  {
    id: 5,
    text: 'The team won the championship.',
    response: 'active',
    status: false
  }
]
