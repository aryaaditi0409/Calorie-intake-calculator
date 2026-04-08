from nada_dsl import *

def total(xs: list[SecretInteger]) -> SecretInteger:
    sum = Integer(0)
    for x in xs:
        sum += x
    return sum

def nada_main():
    # Create the parties for the participants
    participants = [Party("participant" + str(p)) for p in range(10)]
    official = Party(name="official")
    
    # Gather the inputs (calories per meal from each participant)
    calories_per_meal = [
        SecretInteger(
            Input(
                name="calories_per_meal" + str(p),
                party=Party("participant" + str(p))
            )
        )
        for p in range(10)
    ]
    
    # Gather the input for the number of meals per day
    meals_per_day = SecretInteger(Input(name="meals_per_day", party=official))
    
    # Calculate the total daily calorie intake for each participant
    daily_calories = [calories * meals_per_day for calories in calories_per_meal]
    total_daily_calories = total(daily_calories)
    
    return [Output(total_daily_calories, "total_daily_calories", official)]
