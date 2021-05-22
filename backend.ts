export default class backend {

    private goalList: any[]; 

    constructor() {

        this.goalList = [];
    }


    private addGoal(goalname: string, tasks: any[]) : Promise<any[]> {

        return new Promise<string[]>((resolve, reject) => {

            let goalObject = {};
            goalObject = {
                goalName: goalname,
                tasks: tasks,
                accompTasks: []
            };
            this.goalList.push(goalObject);
            return resolve(this.goalList);

        });

    }

    private updateGoal(goalname: string , task: string) : Promise<any[]> {
        return new Promise<string[]>((resolve, reject) => {

            
            for(let goal of this.goalList) {
                if (goalname === goal["goalName"]) {
                    goal["accompTasks"].push(task);
                }
            }
    
        });
        
    }

}