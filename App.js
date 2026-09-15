import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PROCEDURES, GLAND_TYPES, GOLDEN_RULES, MCQS } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('procedures');
  const [selectedEquip, setSelectedEquip] = useState('tx');
  const [checkedSteps, setCheckedSteps] = useState({});
  const [answers, setAnswers] = useState({});

  const currentProc = PROCEDURES.find(p => p.id === selectedEquip) || PROCEDURES[0];

  const toggleCheck = (num) => {
    const key = `${currentProc.id}_${num}`;
    setCheckedSteps(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
        
        <View style={styles.header}>
          <Text style={styles.headerTitle}>InstruXpert</Text>
          <Text style={styles.headerSub}>Cable Glanding & Termination Manual</Text>
        </View>

        <View style={styles.tabBar}>
          {['procedures', 'types', 'rules', 'quiz'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
            >
              <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>
                {tab.toUpperCase()}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
          {activeTab === 'procedures' && (
            <View>
              <View style={styles.equipRow}>
                {PROCEDURES.map(p => (
                  <TouchableOpacity
                    key={p.id}
                    onPress={() => setSelectedEquip(p.id)}
                    style={[styles.equipBtn, selectedEquip === p.id && styles.equipBtnActive]}
                  >
                    <Text style={[styles.equipBtnText, selectedEquip === p.id && styles.equipBtnTextActive]}>
                      {p.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.card}>
                <Text style={styles.cardTitle}>{currentProc.title}</Text>
                <Text style={styles.cardSub}>Cable: {currentProc.cable}</Text>
                <Text style={styles.badge}>{currentProc.standards}</Text>

                <Text style={styles.sectionHeader}>Stripping Tolerances</Text>
                <View style={styles.dimRow}>
                  <View style={styles.dimBox}>
                    <Text style={styles.dimLabel}>Outer Jacket</Text>
                    <Text style={styles.dimVal}>{currentProc.dims.outer}</Text>
                  </View>
                  <View style={styles.dimBox}>
                    <Text style={styles.dimLabel}>Armor Cut</Text>
                    <Text style={styles.dimVal}>{currentProc.dims.armor}</Text>
                  </View>
                  <View style={styles.dimBox}>
                    <Text style={styles.dimLabel}>Inner Bedding</Text>
                    <Text style={styles.dimVal}>{currentProc.dims.inner}</Text>
                  </View>
                </View>
              </View>

              <Text style={styles.listHeading}>Field Checklist</Text>
              {currentProc.steps.map(s => {
                const isDone = checkedSteps[`${currentProc.id}_${s.num}`];
                return (
                  <TouchableOpacity
                    key={s.num}
                    activeOpacity={0.8}
                    onPress={() => toggleCheck(s.num)}
                    style={[styles.stepCard, isDone && styles.stepCardDone]}
                  >
                    <View style={styles.stepTop}>
                      <View style={[styles.stepBadge, isDone && styles.stepBadgeDone]}>
                        <Text style={styles.stepBadgeText}>{isDone ? '✓' : s.num}</Text>
                      </View>
                      <Text style={[styles.stepTitle, isDone && styles.stepTitleDone]}>{s.title}</Text>
                    </View>
                    <Text style={styles.stepText}>{s.text}</Text>
                    {s.caution && (
                      <View style={styles.cautionBox}>
                        <Text style={styles.cautionText}>{s.caution}</Text>
                      </View>
                    )}
                    <View style={styles.checkBox}>
                      <Text style={styles.checkLabel}>Check: </Text>
                      <Text style={styles.checkText}>{s.check}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}

              <View style={styles.card}>
                <Text style={styles.cardTitle}>Final Verification Sign-Off</Text>
                {currentProc.verifications.map((v, i) => (
                  <Text key={i} style={styles.verifItem}>• {v}</Text>
                ))}
              </View>
            </View>
          )}

          {activeTab === 'types' && (
            <View>
              {GLAND_TYPES.map((g, i) => (
                <View key={i} style={styles.card}>
                  <View style={styles.rowBetween}>
                    <Text style={styles.cardTitle}>{g.title}</Text>
                    <Text style={[styles.typeBadge, { borderColor: g.color, color: g.color }]}>{g.tag}</Text>
                  </View>
                  <Text style={styles.bodyText}>{g.desc}</Text>
                  <View style={styles.appBox}>
                    <Text style={styles.appLabel}>Field Application:</Text>
                    <Text style={styles.appText}>{g.app}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {activeTab === 'rules' && (
            <View>
              {GOLDEN_RULES.map((r, i) => (
                <View key={i} style={[styles.card, { borderLeftWidth: 4, borderLeftColor: '#38bdf8' }]}>
                  <Text style={styles.cardTitle}>{r.title}</Text>
                  <Text style={styles.ruleText}>{r.rule}</Text>
                  <View style={styles.whyBox}>
                    <Text style={styles.whyLabel}>Why this is critical:</Text>
                    <Text style={styles.whyText}>{r.why}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {activeTab === 'quiz' && (
            <View>
              {MCQS.map(q => {
                const userAns = answers[q.id];
                const isAnswered = userAns !== undefined;
                return (
                  <View key={q.id} style={styles.card}>
                    <Text style={styles.quizQ}>Q{q.id}. {q.q}</Text>
                    {q.opts.map((opt, idx) => {
                      let btn = styles.optBtn;
                      let txt = styles.optText;
                      if (isAnswered) {
                        if (idx === q.ans) {
                          btn = [styles.optBtn, styles.optCorrect];
                          txt = [styles.optText, styles.optTextCorrect];
                        } else if (idx === userAns) {
                          btn = [styles.optBtn, styles.optWrong];
                          txt = [styles.optText, styles.optTextWrong];
                        }
                      }
                      return (
                        <TouchableOpacity
                          key={idx}
                          disabled={isAnswered}
                          onPress={() => setAnswers(prev => ({ ...prev, [q.id]: idx }))}
                          style={btn}
                        >
                          <Text style={txt}>{opt}</Text>
                        </TouchableOpacity>
                      );
                    })}
                    {isAnswered && (
                      <View style={styles.expBox}>
                        <Text style={styles.expTitle}>{userAns === q.ans ? '✓ Correct' : '✗ Incorrect'}</Text>
                        <Text style={styles.expText}>{q.exp}</Text>
                      </View>
                    )}
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0f172a' },
  header: { padding: 14, borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#38bdf8' },
  headerSub: { fontSize: 11, color: '#94a3b8', marginTop: 2 },
  tabBar: { flexDirection: 'row', backgroundColor: '#090d16', borderBottomWidth: 1, borderBottomColor: '#1e293b' },
  tabBtn: { flex: 1, paddingVertical: 12, alignItems: 'center' },
  tabBtnActive: { borderBottomWidth: 2, borderBottomColor: '#38bdf8' },
  tabBtnText: { fontSize: 11, fontWeight: 'bold', color: '#64748b' },
  tabBtnTextActive: { color: '#38bdf8' },
  container: { flex: 1, padding: 12 },
  equipRow: { flexDirection: 'row', gap: 6, marginBottom: 12 },
  equipBtn: { flex: 1, paddingVertical: 8, backgroundColor: '#1e293b', borderRadius: 8, alignItems: 'center' },
  equipBtnActive: { backgroundColor: '#0284c7' },
  equipBtnText: { fontSize: 11, fontWeight: '600', color: '#94a3b8' },
  equipBtnTextActive: { color: '#ffffff' },
  card: { backgroundColor: '#1e293b', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#334155' },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#ffffff', marginBottom: 2 },
  cardSub: { fontSize: 11, color: '#94a3b8', marginBottom: 6 },
  badge: { alignSelf: 'flex-start', backgroundColor: '#0c4a6e', color: '#38bdf8', fontSize: 10, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, marginBottom: 10 },
  sectionHeader: { fontSize: 10, fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', marginBottom: 6 },
  dimRow: { flexDirection: 'row', gap: 6 },
  dimBox: { flex: 1, backgroundColor: '#0f172a', padding: 8, borderRadius: 6 },
  dimLabel: { fontSize: 9, color: '#64748b' },
  dimVal: { fontSize: 11, fontWeight: 'bold', color: '#f8fafc', marginTop: 2 },
  listHeading: { fontSize: 13, fontWeight: 'bold', color: '#f8fafc', marginVertical: 8 },
  stepCard: { backgroundColor: '#1e293b', borderRadius: 10, padding: 12, marginBottom: 10, borderWidth: 1, borderColor: '#334155' },
  stepCardDone: { borderColor: '#10b981', opacity: 0.8 },
  stepTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  stepBadge: { width: 20, height: 20, borderRadius: 10, backgroundColor: '#334155', alignItems: 'center', justifyContent: 'center', marginRight: 8 },
  stepBadgeDone: { backgroundColor: '#10b981' },
  stepBadgeText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold' },
  stepTitle: { fontSize: 12, fontWeight: 'bold', color: '#ffffff', flex: 1 },
  stepTitleDone: { textDecorationLine: 'line-through', color: '#94a3b8' },
  stepText: { fontSize: 11, color: '#cbd5e1', lineHeight: 16, marginBottom: 6 },
  cautionBox: { backgroundColor: '#451a03', padding: 6, borderRadius: 4, marginBottom: 6, borderLeftWidth: 3, borderLeftColor: '#f59e0b' },
  cautionText: { fontSize: 10, color: '#fde68a' },
  checkBox: { flexDirection: 'row', backgroundColor: '#0f172a', padding: 6, borderRadius: 4 },
  checkLabel: { fontSize: 10, fontWeight: 'bold', color: '#38bdf8' },
  checkText: { fontSize: 10, color: '#94a3b8', flex: 1 },
  verifItem: { fontSize: 11, color: '#cbd5e1', marginVertical: 2 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  typeBadge: { fontSize: 10, fontWeight: 'bold', borderWidth: 1, paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  bodyText: { fontSize: 11, color: '#cbd5e1', lineHeight: 16, marginBottom: 8 },
  appBox: { backgroundColor: '#0f172a', padding: 8, borderRadius: 6 },
  appLabel: { fontSize: 9, color: '#64748b' },
  appText: { fontSize: 10, color: '#e2e8f0', marginTop: 2 },
  ruleText: { fontSize: 11, color: '#f1f5f9', lineHeight: 16, marginVertical: 6 },
  whyBox: { backgroundColor: '#0f172a', padding: 6, borderRadius: 4, marginTop: 4 },
  whyLabel: { fontSize: 10, color: '#38bdf8', fontWeight: 'bold' },
  whyText: { fontSize: 10, color: '#94a3b8', marginTop: 2 },
  quizQ: { fontSize: 12, fontWeight: 'bold', color: '#ffffff', marginBottom: 8, lineHeight: 16 },
  optBtn: { backgroundColor: '#0f172a', padding: 8, borderRadius: 6, marginBottom: 6, borderWidth: 1, borderColor: '#334155' },
  optCorrect: { borderColor: '#10b981', backgroundColor: '#064e3b' },
  optWrong: { borderColor: '#ef4444', backgroundColor: '#7f1d1d' },
  optText: { fontSize: 11, color: '#cbd5e1' },
  optTextCorrect: { color: '#6ee7b7', fontWeight: 'bold' },
  optTextWrong: { color: '#fca5a5', fontWeight: 'bold' },
  expBox: { marginTop: 6, padding: 6, backgroundColor: '#0f172a', borderRadius: 4 },
  expTitle: { fontSize: 10, fontWeight: 'bold', color: '#38bdf8' },
  expText: { fontSize: 10, color: '#94a3b8', marginTop: 2 }
});
                           
