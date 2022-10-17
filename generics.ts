function simpleTState<T>(initial:T): [()=>T,(v:T)=> void] {
    let val:T = initial;
    return [
        () => val,
        (v:T) => {
            val = v
        }
    ]
}
const [st1getter,st1setter] = simpleTState(10)

console.log(st1getter())
st1setter(52)
console.log(st1getter())

const [st2getter,st2setter] = simpleTState<string | null>(null)
console.log(st2getter())
st2setter('asd')
console.log(st2getter())

interface Rank<RankItem> {
    item: RankItem;
    rank: number;    
}

function ranker<RankItem>(
    items:RankItem[], rank: (v: RankItem) => number
    ) : RankItem[] 
    // we return a RankItem generic
    {
    const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }))
    ranks.sort((a,b) => a.rank - b.rank)
    // we need to transform again to a RankItem generic
    // output should be same type as input
    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name:"bulbasoars",
        hp: 20,
    },
    {
        name:"megasaur",
        hp:30,
    }
]

const ranks = ranker(pokemon, ({hp}) => hp)
console.log(ranks)