const { Schema, model } = require("mongoose");

const routineSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minlength: [3, 'Title is too short']
        },

        description: {
            type: String,
            minlength: [10, 'Description is too short']
        },

        exercises: {
            type: [Object],
            validate: {
                validator: value => value.length > 0,
                message: 'Add an exercise'
            },
            properties: {
                name: {
                    type: String
                },
                reps: {
                    type: Number,
                    min: [4, 'Minimum 4 reps'],
                    max: [15, 'Maximum 15 reps'],

                },

                training: {
                    type: String,
                    enum: ['RAW', 'STRENGTH', 'FULL BODY', 'HIT', 'ENDURANCE', 'CARDIO']
                }
            }
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }

    },
    {
        timestamps: true
    }
)

const Routine = model('Routine', routineSchema);

module.exports = Routine