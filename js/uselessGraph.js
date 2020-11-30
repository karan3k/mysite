function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
  graph1_options = {
    numSequences: 6,
    minEventPerColThreshold: 1,
    height: 400,
    svg_width: 900,
    forceLevelName: true,
    levels : ['very low', 'low', 'medium', 'high', 'very high'].reverse(),
    show_seq_names: true,
    path: ['source', 'Childhood', 'School', 'Highschool', 'University', 'Present', 'sink'],
    colorscheme: [ '#6b2a91', '#76a4b5', '#7DBC09', '#F2AD2F', '#DC6B28' ].reverse(),
    catmullromvalue: 1,
    node_width_factor: 0.07,
    link_stroke_width: 3,
    vertical_spacing: 15,
    horizontal_spacing: 160
  }

  highlight_by_seq_num = function(cursvg, seq_nums, delay=0){
    cursvg.selectAll('.seqpath').transition()
      .duration(100)
      .style('opacity', 0.1)

    for (let seq_n of seq_nums){
      cursvg.select('#day_' + seq_n)
        .transition()
        .duration(110)
        .style('opacity', 1)
    }
  }

  d3.json('../data/random_habits.json').then((data) => {
    data = data.filter(l => l.length != 0)
    graph_sandbox = new uselessGraph(data, 'chess-svg', graph1_options)
    d3.selectAll(".path_top_text").attr("font-size", "1.2em").attr('y', 20)
})