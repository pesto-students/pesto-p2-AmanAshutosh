var allPathsSourceTarget = function(graph) {

    const n = graph.length - 1;

    const result = [];
    const path = [];

    dfs(0);

    return result;

    function dfs(position){

        //do

        path.push(position);

        if(position == n ){
            result.push([...path]);
        }

        //recurse
        const nextnodes = graph[position]
        for(let i = 0; i < nextnodes.length; i++){
            dfs(nextnodes[i]);
        }

        //undo
        path.pop();

    }


};