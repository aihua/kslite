KSLITE.add("test-1", function(S){
    S.log("from mod: test-1 is attached");
}, ['test-1_1', 'test-1_2', 'test-1_3']);
KSLITE.log("from mod: test-1 is loaded");
