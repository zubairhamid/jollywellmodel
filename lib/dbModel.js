(function () {
    <!--##################################Require the Modules########################################################-->

    var dbConn = require('@cloudmpower/globaldb');

    var modelextender = require('@cloudmpower/modelextender');

    var timestamps = require('@cloudmpower/utils').timestamp;

    module.exports.modelForService = function(service){

        var db = dbConn.getdbConn(service);

        var mongoose = dbConn.getConnMongoose(service),
            Schema = mongoose.Schema;

        <!--##################################Habit Schema###########################################################-->
        <!--#########################################################################################################-->
        var Habit = new Schema({
            habitId                 : {type: String, required: true },
            habitName               : {type: String, required: true },
            habitImage              : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            habitHowInformation     : {type: String },
            habitDoMore             : [],
            habitDoLess             : [],
            habitWhyInformation     : {type: String }
        });

        Habit.plugin(timestamps);

        var HabitModel = module.exports.Habit = db.model('habit', Habit);
        modelextender.populateModel('Habit', HabitModel);

        <!--##################################Core Practise Schema###################################################-->
        <!--#########################################################################################################-->
        var CorePractice = new Schema({
            practiceId              : {type: String, required: true },
            practiceName            : {type: String, required: true },
            practiceImage           : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            practiceText            : {type: String, required: true },
            habitAssigned           : [{type: String }]
        });

        CorePractice.plugin(timestamps);

        var CorePracticeModel = module.exports.CorePractice = db.model('corepractice', CorePractice);
        modelextender.populateModel('CorePractice', CorePracticeModel);

        <!--##################################Goal Schema############################################################-->
        <!--#########################################################################################################-->
        var Goal = new Schema({
            goalId                  : {type: String, required: true },
            goalName                : {type: String, required: true },
            goalText                : {type: String, required: true },
            goalImage               : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            practiceAssigned        : [{type: String }]
        });

        Goal.plugin(timestamps);

        var GoalModel = module.exports.Goal = db.model('goal', Goal);
        modelextender.populateModel('Goal', GoalModel);

        <!--##################################Nugget Schema##########################################################-->
        <!--#########################################################################################################-->
        var Nugget = new Schema({
            nuggetId                  : {type: String, required: true },
            nuggetName                : {type: String, required: true },
            nuggetText                : {type: String, required: true },
            nuggetLink                : {type: String, required: true },
            nuggetImage               : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            nuggetTagList             : [{type: String }]
        });

        Nugget.plugin(timestamps);

        var NuggetModel = module.exports.Nugget = db.model('nugget', Nugget);
        modelextender.populateModel('Nugget', NuggetModel);

        <!--##################################Recipe Schema##########################################################-->
        <!--#########################################################################################################-->
        var Recipe = new Schema({
            recipeId                  : {type: String, required: true },
            recipeTheme               : {type: String, required: true },
            recipeName                : {type: String, required: true },
            recipeIngredient          : {type: String, required: true },
            recipeMethod              : {type: String, required: true },
            recipeImage               : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            recipeInformation         : {type: String }
        });

        Recipe.plugin(timestamps);

        var RecipeModel = module.exports.Recipe = db.model('recipe', Recipe);
        modelextender.populateModel('Recipe', RecipeModel);

        <!--##################################Quiz Schema############################################################-->
        <!--#########################################################################################################-->
        var Quiz = new Schema({
            quizId                    : {type: String, required: true },
            quizQuestion              : {type: String, required: true },
            quizOptions               : {},
            quizAnswer                : {type: String, required: true },
            quizImage               : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            quizAnswerImage           : {
                name                  : {type: String , required: true },
                size                  : {type: String , required: true },
                type                  : {type: String , required: true },
                base64String          : {type: String , required: true }
            },
            quizAnswerDetail          : {type: String, required: true }
        });

        Quiz.plugin(timestamps);

        var QuizModel = module.exports.Quiz = db.model('quiz', Quiz);
        modelextender.populateModel('Quiz', QuizModel);

        <!--##################################Setup Schema###########################################################-->
        <!--#########################################################################################################-->
        var Setup = new Schema({
            setupId                   : {type: String, required: true },
            userId                    : {type: String, required: true },
            goalId                    : {type: String, required: true },
            practiceId                : {type: String, required: true },
            habitId                   : {type: String, required: true },
            setupStartDate            : {type: Date, required: true },
            setupEndDate              : {type: Date, required: true },
            setupGoal                 : {},
            setupPractice             : {},
            setupHabit                : {}
        });

        Setup.plugin(timestamps);

        var SetupModel = module.exports.Setup = db.model('setup', Setup);
        modelextender.populateModel('Setup', SetupModel);

        <!--##################################HabitEvaluator Schema##################################################-->
        <!--#########################################################################################################-->
        var HabitEvaluator = new Schema({
            habitEvaluatorId          : {type: String, required: true },
            habitId                   : {type: String, required: true },
            habitQuestion             : [{
                question              : {type: String, required: true },
                options               : [{
                    optionId              : {type: String, required: true },
                    optionText            : {type: String, required: true },
                    optionPoints          : {type: String, required: true }
                }],
                isMultipleSelect      : {type: Boolean, default: false }
            }]
        });

        HabitEvaluator.plugin(timestamps);

        var HabitEvaluatorModel = module.exports.HabitEvaluator = db.model('habitevaluator', HabitEvaluator);
        modelextender.populateModel('HabitEvaluator', HabitEvaluatorModel);

        <!--##################################IDidIt Schema##########################################################-->
        <!--#########################################################################################################-->
        var IDidIt = new Schema({
            IDidItId                  : {type: String, required: true },
            IDidItOnDate              : {type: Date, required: true },
            userId                    : {type: String, required: true },
            goalId                    : {type: String, required: true },
            practiceId                : {type: String, required: true },
            habitId                   : {type: String, required: true },
            IDidIt                    : [{type: String }],
            IDidNotDoIt               : [{type: String }],
            moodType                  : {type: String, required: true },
            moodText                  : {type: String, required: true }
        });

        IDidIt.plugin(timestamps);

        var IDidItModel = module.exports.IDidIt = db.model('ididit', IDidIt);
        modelextender.populateModel('IDidIt', IDidItModel);

        <!--##################################TimeLine Schema########################################################-->
        <!--#########################################################################################################-->
        var TimeLine = new Schema({
            timeLineId                : {type: String, required: true },
            timeLineDate              : {type: Date, required: true },
            timeLinePost              : {
                messagePost           : {type: String },
                messageImage          : {
                    name                  : {type: String },
                    size                  : {type: String },
                    type                  : {type: String },
                    base64String          : {type: String }
                }
            },
            userId                    : {type: String, required: true },
            timeLineTags              : [{type: String }]
        });

        TimeLine.plugin(timestamps);

        var TimeLineModel = module.exports.TimeLine = db.model('timeline', TimeLine);
        modelextender.populateModel('TimeLine', TimeLineModel);

        <!--##################################Challenge Schema#######################################################-->
        <!--#########################################################################################################-->
        var Challenge = new Schema({
            challengeId               : {type: String, required: true },
            challengeName             : {type: String, required: true },
            challengeText             : {type: String, required: true },
            challengeImage            : {
                    name                  : {type: String, required: true },
                    size                  : {type: String, required: true },
                    type                  : {type: String, required: true },
                    base64String          : {type: String, required: true }
            },
            challengeTagList          : [{type: String }]
        });

        Challenge.plugin(timestamps);

        var ChallengeModel = module.exports.Challenge = db.model('challenge', Challenge);
        modelextender.populateModel('Challenge', ChallengeModel);

        <!--##################################UserChallenge Schema###################################################-->
        <!--#########################################################################################################-->
        var UserChallenge = new Schema({
            userId                    : {type: String, required: true },
            challengeStartDate        : {type: Date, required: true },
            challengeEndDate          : {type: Date, required: true },
            challengeIsActive         : {type: Boolean, default: true },
            challengeName             : {type: String, required: true },
            challengeText             : {type: String, required: true },
            challengeImage            : {
                    name                  : {type: String, required: true },
                    size                  : {type: String, required: true },
                    type                  : {type: String, required: true },
                    base64String          : {type: String, required: true }
            }
        });

        UserChallenge.plugin(timestamps);

        var UserChallengeModel = module.exports.UserChallenge = db.model('userchallenge', UserChallenge);
        modelextender.populateModel('UserChallenge', UserChallengeModel);

        <!--##################################CompletedChallenge Schema##############################################-->
        <!--#########################################################################################################-->
        var CompletedChallenge = new Schema({
            userId                    : {type: String, required: true },
            challengeStartDate        : {type: Date, required: true },
            challengeEndDate          : {type: Date, required: true },
            challengeName             : {type: String, required: true },
            challengeText             : {type: String, required: true },
            challengeImage            : {
                    name                  : {type: String, required: true },
                    size                  : {type: String, required: true },
                    type                  : {type: String, required: true },
                    base64String          : {type: String, required: true }
            },
            challengeRangeStatus: [{
                    completeDated     : {type: String, required: true },
                    dayNo             : {type: String, required: true },
                    dateStatus        : {type: Boolean, default: false }
            }]
        });

        CompletedChallenge.plugin(timestamps);

        var CompletedChallengeModel = module.exports.CompletedChallenge = db.model('completedchallenge', CompletedChallenge);
        modelextender.populateModel('CompletedChallenge', CompletedChallengeModel);

        <!--##################################Buddy Schema###########################################################-->
        <!--#########################################################################################################-->
        var Buddy = new Schema({
            userId                    : {type: String, required: true },
            buddyName                 : {type: String, required: true },
            buddyContact              : {type: String, required: true },
            buddyEmailId              : {type: String, required: true },
            buddyImage                : {
                    name                  : {type: String, required: true },
                    size                  : {type: String, required: true },
                    type                  : {type: String, required: true },
                    base64String          : {type: String, required: true }
            }
        });

        Buddy.plugin(timestamps);

        var BuddyModel = module.exports.Buddy = db.model('buddy', Buddy);
        modelextender.populateModel('Buddy', BuddyModel);

        <!--##################################Motivator Schema#######################################################-->
        <!--#########################################################################################################-->
        var Motivator = new Schema({
            userId                    : {type: String, required: true },
            motivatorName             : {type: String, required: true },
            motivatorImage            : {
                name                  : {type: String, required: true },
                size                  : {type: String, required: true },
                type                  : {type: String, required: true },
                base64String          : {type: String, required: true }
            }
        });

        Motivator.plugin(timestamps);

        var MotivatorModel = module.exports.Motivator = db.model('motivator', Motivator);
        modelextender.populateModel('Motivator', MotivatorModel);

        <!--##################################User History Schema####################################################-->
        <!--#########################################################################################################-->
        var History = new Schema({
            historyId                 : {type: String, required: true },
            userId                    : {type: String, required: true },
            historyAddedDate          : {type: Date, required: true },
            historyType               : {type: String, required: true },
            historyData               : {}
        });

        History.plugin(timestamps);

        var HistoryModel = module.exports.History = db.model('history', History);
        modelextender.populateModel('History', HistoryModel);
    };
})();