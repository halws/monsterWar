new Vue({
    el: "#app",
    data: {
        controlsTrue: true,
        myHP: 100,
        monsterHP: 100,
        turns: []
    },
    methods: {
        randomVal: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        atack: function(randomVal) {
            this.monsterHP -= randomVal;
            this.monsterAtacks(5, 10);
            this.turns.unshift({
                attack: true,
                text: 'Player hits monster for ' + randomVal
            });
        },
        specialAttack: function(randomVal) {
            this.monsterHP -= randomVal;
            this.monsterAtacks(10, 15);
            this.turns.unshift({
                crit: true,
                text: 'Player hits monster for ' + randomVal
            });
        },
        healing: function(randomVal) {
            this.myHP += randomVal;
            this.monsterAtacks(7, 12);
            this.turns.unshift({
                heal: true,
                text: 'Player heals  for ' + randomVal
            });
        },
        monsterAtacks: function(min, max) {
            var monsterDamage = this.randomVal(min, max);
            this.myHP -= monsterDamage;
            this.turns.unshift({
                monster: true,
                text: 'Monster hits player for ' + monsterDamage
            });

        },
        restart: function() {
            this.controlsTrue = !this.controlsTrue;
            this.myHP = 100;
            this.monsterHP = 100;
            this.turns = [];
        }
    },
    computed: {
        styling: function() {}
    },
    watch: {
        myHP: function(val) {
            if (val <= 0) {
                alert('You lost');
                this.restart();
            }
        },
        monsterHP: function(val) {
            if (val <= 0) {
                alert('You win');
                this.restart();
            }
        },
    }
});